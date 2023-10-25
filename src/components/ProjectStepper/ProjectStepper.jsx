import React, { useState, useContext, useEffect } from 'react';
// import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';
// import { projects } from '../../datas/Projects';
import ToggleContext from '../../context/toggleContext';

import styles from './ProjectStepper.module.scss';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import ProjectStepperHeader from '../ProjectStepperHeader/ProjectStepperHeader';

import { collection, getDocs } from 'firebase/firestore';
import { ref, list } from 'firebase/storage';

import { firestore, storage } from '../../firebase';

function ProjectStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [animation, setAnimation] = useState(true);
  const [imgDirection, setImgDirection] = useState(null);
  const [projects, setProjects] = useState([]);
  const [images, setImages] = useState([]);

  console.log(images);
  const { isLightMode } = useContext(ToggleContext);

  const handleNext = () => {
    setAnimation(true);
    setImgDirection('next');
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setAnimation(true);
    setImgDirection('prev');
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const fetchProject = async () => {
    await getDocs(collection(firestore, 'Projects')).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const sortedData = newData.sort((a, b) => a.order - b.order);
      setProjects(sortedData);
    });
  };

  const fetchImages = async () => {
    console.log(activeStep);
    const link = `gs://portfolio23-84a31.appspot.com`;
    const imageRef = ref(storage, link);
    await list(imageRef, (images) => {
      setImages(images);
    });
  };

  useEffect(() => {
    fetchImages();
  }, [activeStep]);

  useEffect(() => {
    fetchProject();
  }, []);

  return (
    <div className={styles.projectStepper}>
      <ProjectStepperHeader
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        handleNext={handleNext}
        handleBack={handleBack}
      />
      <div
        className={styles.stepperContent}
        data-animation={animation}
        data-direction={imgDirection}
        data-darkmode={!isLightMode}
        onAnimationEnd={() => setAnimation(false)}>
        {/* <ProjectCarousel project={projects[activeStep]} /> */}
        <ProjectInfo project={projects[activeStep]} activeStep={activeStep} />
      </div>
    </div>
  );
}

export default ProjectStepper;

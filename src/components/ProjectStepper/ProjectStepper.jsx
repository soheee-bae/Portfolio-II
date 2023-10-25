import React, { useState, useContext, useEffect } from 'react';
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';
import ToggleContext from '../../context/toggleContext';

import styles from './ProjectStepper.module.scss';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import ProjectStepperHeader from '../ProjectStepperHeader/ProjectStepperHeader';

import { collection, getDocs } from 'firebase/firestore';
import { ref, list, getDownloadURL } from 'firebase/storage';

import { firestore, storage } from '../../firebase';

function ProjectStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [animation, setAnimation] = useState(true);
  const [imgDirection, setImgDirection] = useState(null);
  const [projects, setProjects] = useState([]);
  const [images, setImages] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

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
    const link = `gs://portfolio23-84a31.appspot.com/${projects[activeStep].name}`;
    const imageRef = ref(storage, link);
    const images = await list(imageRef);
    const urlLists = await Promise.all(
      images.items.map(async (img) => {
        const imgRef = ref(storage, `gs://portfolio23-84a31.appspot.com/${img.fullPath}`);
        const url = await getDownloadURL(imgRef);
        return { src: url };
      })
    );
    setImages(urlLists);
    setIsFetching(false);
    console.log(urlLists);
  };

  console.log(images);

  useEffect(() => {
    setIsFetching(true);
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
        projects={projects}
      />
      <div
        className={styles.stepperContent}
        data-animation={animation}
        data-direction={imgDirection}
        data-darkmode={!isLightMode}
        onAnimationEnd={() => setAnimation(false)}>
        <ProjectCarousel images={images} isFetching={isFetching} />
        <ProjectInfo project={projects[activeStep]} activeStep={activeStep} />
      </div>
    </div>
  );
}

export default ProjectStepper;

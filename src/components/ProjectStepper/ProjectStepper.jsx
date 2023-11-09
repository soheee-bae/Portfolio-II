import React, { useState, useContext, useEffect, useRef } from 'react';
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';
import ToggleContext from '../../context/toggleContext';

import styles from './ProjectStepper.module.scss';
// import ProjectInfo from '../ProjectInfo/ProjectInfo';
import ProjectStepperHeader from '../ProjectStepperHeader/ProjectStepperHeader';

import { collection, getDocs } from 'firebase/firestore';
// import { ref, list, getDownloadURL } from 'firebase/storage';

import { firestore } from '../../firebase';

function ProjectStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [projects, setProjects] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  // const [images, setImages] = useState([]);

  const sliderRef = useRef();
  const { isLightMode } = useContext(ToggleContext);

  // const fetchImages = async (name) => {
  //   if (name) {
  //     const link = `gs://portfolio23-84a31.appspot.com/${name}`;
  //     const imageRef = ref(storage, link);
  //     const images = await list(imageRef);
  //     const imageLists = await Promise.all(
  //       images.items.map(async (img) => {
  //         const imgRef = ref(storage, `gs://portfolio23-84a31.appspot.com/${img.fullPath}`);
  //         const url = await getDownloadURL(imgRef);
  //         return { src: url };
  //       })
  //     );
  //     return imageLists;
  //   }
  // };

  const fetchProject = async () => {
    await getDocs(collection(firestore, 'Projects')).then(async (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      const sortedData = newData.sort((a, b) => a.order - b.order);
      setProjects(sortedData);

      // const images = await Promise.all(
      //   sortedData?.map(async (project) => {
      //     const imageLists = await fetchImages(project.name);
      //     return { imageLists };
      //   })
      // );
      // setImages(images);
      setIsFetching(false);
    });
  };

  useEffect(() => {
    setIsFetching(true);
    fetchProject();
  }, []);

  return (
    <div className={styles.projectStepper}>
      <ProjectStepperHeader
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        projects={projects}
        sliderRef={sliderRef}
      />
      <div className={styles.stepperContent} data-darkmode={!isLightMode}>
        <ProjectCarousel
          projects={projects}
          isFetching={isFetching}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          sliderRef={sliderRef}
        />
      </div>
    </div>
  );
}

export default ProjectStepper;

import React, { useState, useContext } from 'react';
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';
import { projects } from '../../datas/Projects';
import ToggleContext from '../../context/toggleContext';

import styles from './ProjectStepper.module.scss';
import ProjectInfo from '../ProjectInfo/ProjectInfo';
import ProjectStepperHeader from '../ProjectStepperHeader/ProjectStepperHeader';

function ProjectStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [animation, setAnimation] = useState(true);
  const [imgDirection, setImgDirection] = useState(null);

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
        <ProjectCarousel project={projects[activeStep]} />
        <ProjectInfo project={projects[activeStep]} activeStep={activeStep} />
      </div>
    </div>
  );
}

export default ProjectStepper;

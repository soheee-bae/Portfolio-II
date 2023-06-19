import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { projects } from '../../datas/Projects';
import styles from './ProjectStepper.module.scss';
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';

function ProjectStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  //   const handleStepChange = (step) => {
  //     setActiveStep(step);
  //   };

  return (
    <div className={styles.projectStepper}>
      <div className={styles.stepperContent}>
        <IconButton
          onClick={handleBack}
          disabled={activeStep === 0}
          className={styles.backIconButton}
          sx={{ '&:hover': { backgroundColor: 'transparent' } }}>
          <ArrowBackIosIcon />
        </IconButton>
        <ProjectCarousel project={projects[activeStep]} />
        <IconButton
          onClick={handleNext}
          disabled={activeStep === 2}
          className={styles.nextIconButton}
          sx={{ '&:hover, &:active': { backgroundColor: 'transparent' } }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ProjectStepper;

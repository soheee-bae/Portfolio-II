import React, { useContext, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';
import { projects } from '../../datas/Projects';
import styles from './ProjectStepper.module.scss';
import ToggleContext from '../../context/toggleContext';

function ProjectStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const { isLightMode } = useContext(ToggleContext);

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
      <div className={styles.stepperTitle}>
        <h1>Project</h1>
      </div>
      <div className={styles.stepperContent}>
        <IconButton
          onClick={handleBack}
          disabled={activeStep === 0}
          className={styles.backIconButton}
          sx={{
            color: isLightMode ? 'var(--blackColor400)' : 'var(--whiteColor600)',
            '&:hover': { backgroundColor: 'transparent' }
          }}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <ProjectCarousel project={projects[activeStep]} />
        <IconButton
          onClick={handleNext}
          disabled={activeStep === 2}
          className={styles.nextIconButton}
          sx={{
            color: isLightMode ? 'var(--blackColor400)' : 'var(--whiteColor600)',
            '&:hover': { backgroundColor: 'transparent' }
          }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default ProjectStepper;

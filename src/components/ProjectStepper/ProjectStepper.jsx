import React, { useContext, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';
import { projects } from '../../datas/Projects';
import ToggleContext from '../../context/toggleContext';

import styles from './ProjectStepper.module.scss';

function ProjectStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [animation, setAnimation] = useState(true);
  const [direction, setDirection] = useState(null);

  const { isLightMode } = useContext(ToggleContext);

  const handleNext = () => {
    setAnimation(true);
    setDirection('next');
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setAnimation(true);
    setDirection('prev');
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={styles.projectStepper}>
      <div className={styles.stepperContent}>
        <IconButton
          onClick={handleBack}
          disabled={activeStep === 0 || animation}
          className={styles.backIconButton}
          sx={{
            color: isLightMode ? 'var(--blackColor400)' : 'var(--whiteColor600)',
            '&:hover': { backgroundColor: 'transparent' }
          }}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <ProjectCarousel
          project={projects[activeStep]}
          animation={animation}
          setAnimation={setAnimation}
          direction={direction}
        />
        <IconButton
          onClick={handleNext}
          disabled={activeStep === 3 || animation}
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

import React, { useState, useContext, useRef } from 'react';
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';
import ToggleContext from '../../context/toggleContext';

import styles from './ProjectStepper.module.scss';
import ProjectStepperHeader from '../ProjectStepperHeader/ProjectStepperHeader';
import ProjectContext from '../../context/projectContext';

function ProjectStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const sliderRef = useRef();
  const { isLightMode } = useContext(ToggleContext);
  const { projects, isFetching } = useContext(ProjectContext);

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

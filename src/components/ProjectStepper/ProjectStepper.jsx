import React, { useState, useContext, useRef } from 'react';
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';
import ToggleContext from '../../context/toggleContext';

import styles from './ProjectStepper.module.scss';
// import ProjectInfo from '../ProjectInfo/ProjectInfo';
import ProjectStepperHeader from '../ProjectStepperHeader/ProjectStepperHeader';

import { getProjects } from '../../helpers/getProjects';

function ProjectStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const { projects, isFetching } = getProjects();

  const sliderRef = useRef();
  const { isLightMode } = useContext(ToggleContext);

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

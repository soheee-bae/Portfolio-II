import { useContext } from 'react';

import { HandDrawnCircle } from '../../icons';
import ToggleContext from '../../context/toggleContext';

import styles from './ProjectStepperHeader.module.scss';
import clsx from 'clsx';

function ProjectStepperHeader({ activeStep, setActiveStep, handleNext, handleBack, projects }) {
  const { isLightMode } = useContext(ToggleContext);

  const arrowSrc = isLightMode ? './image/curly-arrow.png' : './image/curly-arrowWhite.png';
  const color = isLightMode ? 'var(--blackColor200)' : 'var(--whiteColor300)';

  return (
    <div style={{ color: `${color}` }}>
      <div className={styles.arrows}>
        <p>Select one!</p>
        <img className={styles.arrow} src={arrowSrc} alt="arrow" />
      </div>
      <div className={styles.projectStepperHeader}>
        <ul>
          {projects.map((project, index) => (
            <li
              key={index}
              onClick={() => {
                if (index > activeStep) {
                  handleNext();
                } else if (index < activeStep) {
                  handleBack();
                }

                setActiveStep(index);
              }}
              className={clsx(styles.projectStepper, {
                [styles.activeProjectStepper]: activeStep === index
              })}>
              {project.iconName}
              <HandDrawnCircle color={color} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectStepperHeader;

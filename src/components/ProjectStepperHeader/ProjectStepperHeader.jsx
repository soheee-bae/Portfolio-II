import { useContext } from 'react';

import { HandDrawnCircle } from '../../icons';
import ToggleContext from '../../context/toggleContext';

import styles from './ProjectStepperHeader.module.scss';
import clsx from 'clsx';

function ProjectStepperHeader({ activeStep, setActiveStep, projects, sliderRef }) {
  const { isLightMode } = useContext(ToggleContext);

  const color = isLightMode ? 'var(--blackColor200)' : 'var(--whiteColor300)';

  return (
    <div style={{ color: `${color}` }}>
      <div className={styles.projectStepperHeader}>
        <ul>
          {projects.map((project, index) => (
            <li
              key={index}
              onClick={() => {
                sliderRef.current.slickGoTo(index);
                setActiveStep(index);
              }}
              className={clsx(styles.projectStepper, {
                [styles.activeProjectStepper]: activeStep === index
              })}>
              {project.name}
              <HandDrawnCircle color={color} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectStepperHeader;

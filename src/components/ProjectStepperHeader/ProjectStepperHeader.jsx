import { projects } from '../../datas/Projects';
import { HandDrawnCircle } from '../../icons';
import clsx from 'clsx';
import styles from './ProjectStepperHeader.module.scss';

function ProjectStepperHeader({ activeStep, setActiveStep }) {
  return (
    <div className={styles.projectStepperHeader}>
      <ul>
        {projects.map((project, index) => (
          <li
            key={index}
            onClick={() => {
              setActiveStep(index);
            }}
            className={clsx(styles.projectStepper, {
              [styles.activeProjectStepper]: activeStep === index
            })}>
            {project.name}
            <HandDrawnCircle />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectStepperHeader;

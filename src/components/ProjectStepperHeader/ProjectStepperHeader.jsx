import { projects } from '../../datas/Projects';
import { HandDrawnCircle } from '../../icons';
import styles from './ProjectStepperHeader.module.scss';
import clsx from 'clsx';

function ProjectStepperHeader({ activeStep, setActiveStep, handleNext, handleBack }) {
  return (
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
            {project.name}
            <HandDrawnCircle />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectStepperHeader;

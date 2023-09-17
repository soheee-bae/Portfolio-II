import { projects } from '../../datas/Projects';
import { HandDrawnCircle } from '../../icons';
import styles from './ProjectStepperHeader.module.scss';

function ProjectStepperHeader({ activeStep, setActiveStep }) {
  console.log(activeStep);
  return (
    <div className={styles.projectStepperHeader}>
      <ul>
        {projects.map((project, index) => (
          <li
            key={index}
            onClick={() => {
              setActiveStep(index);
            }}>
            {project.name}
            <HandDrawnCircle />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectStepperHeader;

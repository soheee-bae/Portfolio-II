import { projects } from '../../datas/Projects';
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
            }}>
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectStepperHeader;

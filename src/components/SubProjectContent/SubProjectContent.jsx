import GitHubIcon from '@mui/icons-material/GitHub';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ScrollMouse from '../../components/ScrollMouse/ScrollMouse';
import styles from './SubProjectContent.module.scss';

function SubProjectContent({ projects, projectId }) {
  const project = projects.find((project) => project.id === projectId);

  return (
    <div>
      <div className={styles.content}>
        <p className={styles.type}>{project?.type}</p>
        <div className={styles.title}>
          <h1>{project?.name}</h1>
        </div>
        <p className={styles.description}>{project?.description}</p>
        <div className={styles.skills}>
          {project?.skills.map((skill) => (
            <p key={skill}>{skill}</p>
          ))}
        </div>
        <div className={styles.hr} />
        <div className={styles.buttons}>
          <button onClick={() => window.open(project?.demo)}>
            <RemoveRedEyeIcon />
            Project
          </button>
          <button onClick={() => window.open(project?.github)}>
            <GitHubIcon />
            Github
          </button>
        </div>
      </div>
      <div className={styles.scrollMouse}>
        <ScrollMouse />
      </div>
    </div>
  );
}

export default SubProjectContent;

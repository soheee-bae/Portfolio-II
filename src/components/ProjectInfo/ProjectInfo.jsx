import { useContext } from 'react';
import ToggleContext from '../../context/toggleContext';

import styles from './ProjectInfo.module.scss';
import clsx from 'clsx';
import CursorContext from '../../context/cursorContext';
import { useNavigate } from 'react-router-dom';

function ProjectInfo({ project }) {
  const { isLightMode } = useContext(ToggleContext);
  const { textEnter, textLeave } = useContext(CursorContext);
  const navigate = useNavigate();

  if (!project) return null;

  const description = project.shortDescription.replace(/\\n/g, '\n');

  return (
    <div
      className={clsx(styles.ProjectInfo, {
        [styles.projectInfoLight]: isLightMode
      })}>
      <h1
        className={styles.name}
        onPointerEnter={() => {
          textEnter('click');
        }}
        onPointerLeave={() => {
          textLeave();
        }}
        onClick={() => {
          navigate(`/project/${project.id}`);
        }}>
        {project.name.toUpperCase()}
      </h1>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {project.skills.map((skill, index) => (
          <li className={styles.skill} key={index}>
            {skill} |
          </li>
        ))}
        <li className={styles.skill}>{project.type}</li>
      </ul>
    </div>
  );
}

export default ProjectInfo;

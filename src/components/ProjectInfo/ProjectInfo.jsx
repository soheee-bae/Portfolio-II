import { useContext } from 'react';
import ToggleContext from '../../context/toggleContext';

import styles from './ProjectInfo.module.scss';
import clsx from 'clsx';
import CursorContext from '../../context/cursorContext';

function ProjectInfo({ project }) {
  const { isLightMode } = useContext(ToggleContext);
  const { textEnter, textLeave } = useContext(CursorContext);

  if (!project) return null;

  const description = project.shortDescription.replace(/\\n/g, '\n');

  return (
    <div className={clsx(styles.ProjectInfo, { [styles.projectInfoLight]: isLightMode })}>
      <h1
        className={styles.name}
        onPointerEnter={() => {
          textEnter('click');
        }}
        onPointerLeave={() => {
          textLeave();
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

{
  /* <p className={styles.type}>{project.type}</p> */
}
{
  /* <div className={styles.links}>
        <Tooltip title="Github">
          <a target="_blank" rel="noreferrer" href={project.github}>
            <GitHubIcon sx={{ color: color }} />
          </a>
        </Tooltip>
        <Tooltip title="사이트 바로가기">
          <a target="_blank" rel="noreferrer" href={project.demo}>
            <LaunchIcon sx={{ color: color }} />
          </a>
        </Tooltip>
        <Tooltip title="자세한 프로젝트 설명보기">
          <a target="_blank" rel="noreferrer" href={project.demo}>
            <DescriptionOutlinedIcon sx={{ color: color }} />
          </a>
        </Tooltip>
      </div> */
}

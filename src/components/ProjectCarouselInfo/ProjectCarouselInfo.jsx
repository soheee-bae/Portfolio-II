import { useContext } from 'react';
import ToggleContext from '../../context/toggleContext';

import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import Tooltip from '@mui/material/Tooltip';
import LaunchIcon from '@mui/icons-material/Launch';

import styles from './ProjectCarouselInfo.module.scss';

function ProjectCarouselInfo({ project, animation, setAnimation, direction, activeStep }) {
  const { isLightMode } = useContext(ToggleContext);

  const color = isLightMode ? 'var(--blackColor200)' : 'var(--whiteColor300)';

  console.log(animation, setAnimation, direction);
  const description = project.description.replace(/\\n/g, '\n');
  return (
    <div className={styles.projectCarouselInfo}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <p>0 {activeStep + 1} - 0 5</p>
          <hr />
          <p className={styles.type}>{project.type}</p>
          <p className={styles.name}>{project.name.toUpperCase()}</p>
        </div>
      </div>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {project.skills.map((skill) => (
          <li className={styles.skill} key={skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
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
      </div>
    </div>
  );
}

export default ProjectCarouselInfo;

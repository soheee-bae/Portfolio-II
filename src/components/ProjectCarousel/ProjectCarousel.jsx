import { useContext, useEffect } from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import Tooltip from '@mui/material/Tooltip';
import LaunchIcon from '@mui/icons-material/Launch';

import styles from './ProjectCarousel.module.scss';
import ToggleContext from '../../context/toggleContext';

function ProjectCarousel({ project }) {
  const { isLightMode } = useContext(ToggleContext);
  const [animation, setAnimation] = useState(true);

  const color = isLightMode ? 'var(--blackColor200)' : 'var(--whiteColor300)';

  useEffect(() => {}, [project]);

  return (
    <div
      className={styles.projectCarousel}
      data-animation={animation}
      onAnimationEnd={() => setAnimation(false)}>
      <Carousel
        images={project.images}
        objectFit="contain"
        hasLeftButton={false}
        hasRightButton={false}
        hasMediaButton={false}
        hasSizeButton={false}
        hasIndexBoard={false}
        className={styles.carousel}
      />
      <div className={styles.header}>
        <p className={styles.type}>{project.type}</p>
        <p className={styles.name}>{project.name.toUpperCase()}</p>
      </div>
      <p className={styles.description}>{project.description}</p>
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
export default ProjectCarousel;

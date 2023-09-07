import { useContext } from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import styles from './ProjectCarousel.module.scss';
import ToggleContext from '../../context/toggleContext';

function ProjectCarousel({ project, animation, setAnimation, direction }) {
  const { isLightMode } = useContext(ToggleContext);

  return (
    <div
      className={styles.projectCarousel}
      data-animation={animation}
      data-direction={direction}
      data-darkmode={!isLightMode}
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
    </div>
  );
}
export default ProjectCarousel;

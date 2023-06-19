import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import styles from './ProjectCarousel.module.scss';

function ProjectCarousel({ project }) {
  return (
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
  );
}
export default ProjectCarousel;

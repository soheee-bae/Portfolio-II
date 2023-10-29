import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import styles from './ProjectCarousel.module.scss';
import { Loader } from '../Loader/Loader';

function ProjectCarousel({ images, isFetching }) {
  console.log(isFetching);
  return (
    <div className={styles.projectCarousel}>
      {isFetching ? (
        <div className={styles.empty}>
          <Loader />
        </div>
      ) : (
        <Carousel
          images={images}
          hasMediaButton={false}
          hasSizeButton={false}
          hasIndexBoard={false}
          hasThumbnails={true}
          hasLeftButton={false}
          hasRightButton={false}
          isAutoPlaying={true}
          className={styles.carousel}
          objectFit="contain"
        />
      )}
    </div>
  );
}
export default ProjectCarousel;

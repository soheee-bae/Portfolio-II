import styles from './ProjectCarousel.module.scss';
import { Loader } from '../Loader/Loader';

import Slider from 'react-slick';
import ProjectInfo from '../ProjectInfo/ProjectInfo';

function ProjectCarousel({ projects, isFetching, activeStep }) {
  console.log(activeStep, projects);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className={styles.projectCarousel}>
      {isFetching ? (
        <div className={styles.empty}>
          <Loader />
        </div>
      ) : (
        <Slider {...settings} className={styles.projectContent}>
          {projects.map((project) => {
            return <ProjectInfo key={project.id} project={project} activeStep={activeStep} />;
          })}
        </Slider>
      )}
    </div>
  );
}
export default ProjectCarousel;

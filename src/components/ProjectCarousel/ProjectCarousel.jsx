import styles from './ProjectCarousel.module.scss';
import { Loader } from '../Loader/Loader';

import Slider from 'react-slick';
import ProjectInfo from '../ProjectInfo/ProjectInfo';

import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

function ProjectCarousel({ projects, isFetching, activeStep, setActiveStep, sliderRef }) {
  const handleArrow = (ev, type) => {
    ev.preventDefault();
    ev.stopPropagation();

    const stepNum = type === 'prev' ? activeStep - 1 : activeStep + 1;
    sliderRef.current.slickGoTo(stepNum);
    setActiveStep(stepNum);
  };

  const handleBefore = (_blank, next) => {
    setActiveStep(next);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: handleBefore
  };

  return (
    <div className={styles.projectCarousel}>
      {isFetching ? (
        <div className={styles.empty}>
          <Loader />
        </div>
      ) : (
        <div className={styles.sliderContent}>
          <div className={styles.count}>
            <p className={styles.activeStep}>0 {activeStep + 1} - 0 5</p>
          </div>
          <Slider ref={sliderRef} {...settings}>
            {projects.map((project) => {
              return <ProjectInfo key={project.id} project={project} />;
            })}
          </Slider>
          <div className={styles.arrows}>
            <button
              onClick={(ev) => {
                handleArrow(ev, 'prev');
              }}
              disabled={activeStep === 0}>
              <WestIcon />
            </button>
            <button
              onClick={(ev) => {
                handleArrow(ev, 'next');
              }}
              disabled={activeStep === 4}>
              <EastIcon />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
export default ProjectCarousel;

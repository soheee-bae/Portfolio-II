import { useContext } from 'react';
import { useScroll } from '../../hooks/useScroll';
import ToggleContext from '../../context/toggleContext';
import styles from './ScrollMouse.module.scss';

function ScrollMouse() {
  const { scrollTriggered } = useScroll();
  const { isLightMode } = useContext(ToggleContext);

  return (
    <div className={styles.scrollContainer} data-scroll={scrollTriggered}>
      <div className={styles.scrollDowns}>
        <div className={styles.mouse} data-lightmode={isLightMode}>
          <div className={styles.scroller} data-lightmode={isLightMode}></div>
        </div>
      </div>
    </div>
  );
}

export default ScrollMouse;

import { useContext } from 'react';
import ToggleContext from '../../context/toggleContext';
import styles from './ScrollMouse.module.scss';

function ScrollMouse({ scroll }) {
  const { isLightMode } = useContext(ToggleContext);

  return (
    <div className={styles.scrollContainer} data-scroll={scroll}>
      <div className={styles.scrollDowns}>
        <div className={styles.mouse} data-lightmode={isLightMode}>
          <div className={styles.scroller} data-lightmode={isLightMode}></div>
        </div>
      </div>
    </div>
  );
}

export default ScrollMouse;

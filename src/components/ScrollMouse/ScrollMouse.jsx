import styles from './ScrollMouse.module.scss';

function ScrollMouse() {
  return (
    <div className={styles.scrollContainer}>
      <div className={styles.scrollDowns}>
        <div className={styles.mouse}>
          <div className={styles.scroller}></div>
        </div>
      </div>
    </div>
  );
}

export default ScrollMouse;

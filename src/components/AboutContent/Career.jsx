import { useContext } from 'react';
import { Sagetap } from '../../icons';
import styles from './AboutContent.module.scss';
import ToggleContext from '../../context/toggleContext';
import CursorContext from '../../context/cursorContext';

function Career() {
  const { isLightMode } = useContext(ToggleContext);
  const { textEnter, textLeave } = useContext(CursorContext);
  return (
    <div className={styles.content}>
      <div className={styles.careerContent}>
        <div>
          <Sagetap />
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.sagetap.io/"
            className={styles.subtitle}
            onMouseEnter={() => textEnter('click')}
            onMouseLeave={() => textLeave()}
            style={{ color: isLightMode ? '#000000' : '#ffffff' }}>
            Sagetap.io
          </a>
        </div>
        <p></p>
      </div>
    </div>
  );
}
export default Career;

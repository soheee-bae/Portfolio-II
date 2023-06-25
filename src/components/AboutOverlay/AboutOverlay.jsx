import { useContext } from 'react';
import styles from './AboutOverlay.module.scss';
import ToggleContext from '../../context/toggleContext';

function AboutOverlay() {
  const { isLightMode } = useContext(ToggleContext);

  const color = isLightMode ? 'var(--blackColor200)' : 'var(--whiteColor300)';

  return (
    <div className={styles.aboutOverlay} style={{ color: `${color}` }}>
      <p>SKILL</p>
      <p>CAREER</p>
      <p>EDUCATION</p>
    </div>
  );
}

export default AboutOverlay;

import { useContext } from 'react';
import styles from './AboutOverlay.module.scss';
import ToggleContext from '../../context/toggleContext';

function AboutOverlay({ aboutSection }) {
  const { isLightMode } = useContext(ToggleContext);
  const color = isLightMode ? 'var(--blackColor200)' : 'var(--whiteColor300)';

  const content =
    aboutSection === 'skill'
      ? Skill
      : aboutSection === 'education'
      ? Education
      : aboutSection === 'career'
      ? Career
      : null;

  return (
    <div className={styles.aboutOverlay} style={{ color: `${color}` }}>
      <p className={styles.title}>{aboutSection.toUpperCase()}</p>
      {content}
    </div>
  );
}

export default AboutOverlay;

function Skill() {
  return <div>
    

  </div>;
}

function Education() {
  return <div></div>;
}

function Career() {
  return <div></div>;
}

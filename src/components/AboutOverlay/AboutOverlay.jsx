import { useContext } from 'react';
import styles from './AboutOverlay.module.scss';
import ToggleContext from '../../context/toggleContext';
import clsx from 'clsx';

function AboutOverlay({ aboutSection, animation, setAnimation }) {
  const { isLightMode } = useContext(ToggleContext);

  const color = isLightMode ? 'var(--blackColor200)' : 'var(--whiteColor300)';

  const content =
    aboutSection === 'skill' ? (
      <Skill />
    ) : aboutSection === 'education' ? (
      <Education />
    ) : aboutSection === 'career' ? (
      <Career />
    ) : null;

  return (
    <div
      className={clsx(styles.aboutOverlay, { [styles.hide]: !aboutSection })}
      style={{ color: `${color}` }}
      data-animation={animation}
      onAnimationEnd={() => setAnimation(false)}>
      <div className={styles.container}>
        <p className={styles.title}>{aboutSection?.toUpperCase()}</p>
        {content}
      </div>
    </div>
  );
}

export default AboutOverlay;

function Skill() {
  return (
    <div className={styles.content}>
      <p>skill heasdfsdfasldkfjasdlfkjasdfkj kdjadskjf</p>
    </div>
  );
}

function Education() {
  return <div className={styles.content}></div>;
}

function Career() {
  return <div className={styles.content}></div>;
}

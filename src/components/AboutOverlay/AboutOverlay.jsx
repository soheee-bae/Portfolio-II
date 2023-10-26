import { useContext } from 'react';
import clsx from 'clsx';

import ToggleContext from '../../context/toggleContext';
import Education from '../AboutContent/Education';
import Skill from '../AboutContent/Skill';
import Career from '../AboutContent/Career';

import styles from './AboutOverlay.module.scss';

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
    ) : (
      <div>Default</div>
    );

  return (
    <div
      className={clsx(styles.aboutOverlay)}
      style={{ color: `${color}` }}
      data-animation={animation}
      onAnimationEnd={() => setAnimation(false)}>
      <div className={styles.container}>
        <div className={styles.titleArea}>
          <p className={styles.title}>{aboutSection?.toUpperCase()}</p>
          {aboutSection === 'skill' && (
            <p className={styles.hint}>아이콘에 마우스를 올리면 자세한 설명이 나옵니다.</p>
          )}
        </div>
        {content}
      </div>
    </div>
  );
}

export default AboutOverlay;

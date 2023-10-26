import React, { useContext, useState } from 'react';
import { a } from '@react-spring/web';

import ToggleContext from '../../context/toggleContext';
import AboutScene from '../../components/AboutScene/AboutScene';
import AboutOverlay from '../../components/AboutOverlay/AboutOverlay';

import styles from './About.module.scss';

function About() {
  const { x } = useContext(ToggleContext);

  const [aboutSection, setAboutSection] = useState(null);
  const [animation, setAnimation] = useState(true);

  return (
    <a.div
      id="about"
      className={styles.about}
      style={{
        backgroundColor: x.to([0, 1], ['var(--whiteColor400)', 'var(--blackColor300)'])
      }}>
      <h1>ABOUT</h1>
      <div className={styles.aboutContainer}>
        <a.div className={styles.aboutContent}>
          <AboutScene
            aboutSection={aboutSection}
            setAboutSection={setAboutSection}
            setAnimation={setAnimation}
          />
        </a.div>
        <AboutOverlay
          aboutSection={aboutSection}
          setAnimation={setAnimation}
          animation={animation}
        />
      </div>
    </a.div>
  );
}

export default About;

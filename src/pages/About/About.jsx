import React, { useContext, useState } from 'react';
import { a } from '@react-spring/web';

import ToggleContext from '../../context/toggleContext';
import AboutScene from '../../components/AboutScene/AboutScene';
import AboutOverlay from '../../components/AboutOverlay/AboutOverlay';
import styles from './About.module.scss';

function About() {
  const { x } = useContext(ToggleContext);
  const [aboutSection, setAboutSection] = useState(null);

  return (
    <a.div
      id="about"
      className={styles.about}
      style={{
        backgroundColor: x.to([0, 1], ['var(--whiteColor400)', 'var(--blackColor300)'])
      }}>
      <a.div className={styles.aboutContent}>
        <AboutScene setAboutSection={setAboutSection} />
      </a.div>
      <AboutOverlay aboutSection={aboutSection} />
    </a.div>
  );
}

export default About;

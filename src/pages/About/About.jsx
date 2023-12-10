import React, { useState } from 'react';
import { a } from '@react-spring/web';

import AboutScene from '../../components/AboutScene/AboutScene';
import AboutOverlay from '../../components/AboutOverlay/AboutOverlay';

import styles from './About.module.scss';
import Layout from '../../components/Layout/Layout';

function About() {
  const [aboutSection, setAboutSection] = useState(null);
  const [animation, setAnimation] = useState(true);

  return (
    <Layout className={styles.about}>
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
    </Layout>
  );
}

export default About;

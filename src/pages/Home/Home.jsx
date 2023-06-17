import React from 'react';
import { a } from '@react-spring/web';

import Scene from '../../components/Scene/Scene';
import Overlay from '../../components/Overlay/Overlay';
import Icons from '../../components/ThemeIcons/ThemeIcons';
import { useToggle } from '../../hooks/useToggle';

import styles from './Home.modules.scss';

function Home() {
  const { x, toggle } = useToggle();

  return (
    <a.div
      id="home"
      className={styles.homeContainer}
      style={{
        backgroundColor: x.to([0, 1], ['#DEE2E6', '#343A40'])
      }}
    >
      <Overlay />
      <a.div className={styles.homeContent}>
        <Scene />
        <Icons />
      </a.div>
    </a.div>
  );
}

export default Home;

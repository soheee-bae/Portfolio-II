import React, { useContext } from 'react';
import { a } from '@react-spring/web';

import Scene from '../../components/HomeScene/HomeScene';
import Overlay from '../../components/HomeOverlay/HomeOverlay';
import Icons from '../../components/SwitchIcons/SwitchIcons';
import ScrollMouse from '../../components/ScrollMouse/ScrollMouse';
import ToggleContext from '../../context/toggleContext';

import styles from './Home.module.scss';

function Home({ scroll }) {
  const { x } = useContext(ToggleContext);

  return (
    <a.div
      id="home"
      className={styles.homeContainer}
      style={{
        backgroundColor: x.to([0, 1], ['var(--whiteColor400)', 'var(--blackColor300)'])
      }}>
      <Overlay />
      <a.div className={styles.homeContent}>
        <Scene />
        <Icons />
      </a.div>
      <ScrollMouse scroll={scroll} />
    </a.div>
  );
}

export default Home;

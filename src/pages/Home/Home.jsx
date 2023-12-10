import React from 'react';
import { a } from '@react-spring/web';

import Scene from '../../components/HomeScene/HomeScene';
import Overlay from '../../components/HomeOverlay/HomeOverlay';
import Icons from '../../components/SwitchIcons/SwitchIcons';

import styles from './Home.module.scss';
import Layout from '../../components/Layout/Layout';

function Home() {
  return (
    <Layout className={styles.homeContainer}>
      <Overlay />
      <a.div className={styles.homeContent}>
        <Scene />
        <Icons />
      </a.div>
    </Layout>
  );
}

export default Home;

import React, { Suspense, useContext } from 'react';
import { Canvas } from '@react-three/fiber';
import { a } from '@react-spring/three';

import ToggleContext from '../../context/toggleContext';
import AboutObjects from '../AboutObjects/AboutObjects';
import styles from './AboutScene.module.scss';

function AboutScene({ aboutSection, setAboutSection, setAnimation }) {
  const { x } = useContext(ToggleContext);
  const color = x.to([0, 1], ['#ffffff', '#ffffff']);

  return (
    <Canvas
      className={styles.canvas}
      orthographic
      shadows
      dpr={[1, 2]}
      camera={{ zoom: 80, position: [-14, 25, 18], fov: 35 }}>
      <ambientLight intensity={0.5} />
      <a.directionalLight position={[-10, 20, 10]} intensity={0.6} color={color} />
      <a.pointLight position={[1, 3, 5]} distance={5} intensity={5} color={color} />
      <a.spotLight
        color={color}
        position={[15, 25, 14]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.00001}
        castShadow
      />
      <Suspense fallback={null}>
        <AboutObjects
          aboutSection={aboutSection}
          setAboutSection={setAboutSection}
          setAnimation={setAnimation}
        />
      </Suspense>
      <mesh receiveShadow renderOrder={1000} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <a.shadowMaterial transparent opacity={x.to((x) => 0.1 + x * 0.2)} />
      </mesh>
    </Canvas>
  );
}

export default AboutScene;

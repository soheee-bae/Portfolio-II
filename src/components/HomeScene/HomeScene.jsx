import React, { Suspense, useContext } from 'react';
import { Canvas } from '@react-three/fiber';
import { a } from '@react-spring/three';

import Switch from '../Switch/Switch';
import ToggleContext from '../../context/toggleContext';

import styles from './HomeScene.module.scss';

function Scene() {
  const { x } = useContext(ToggleContext);

  const color = x.to([0, 1], ['#f8f9fa', '#343a40']);

  return (
    <Canvas
      className={styles.canvas}
      orthographic
      shadows
      dpr={[1, 2]}
      camera={{ zoom: 60, position: [-10, 10, 10], fov: 35 }}
    >
      <ambientLight intensity={0.1} />
      <directionalLight position={[-20, 20, 20]} intensity={1} />
      <a.directionalLight position={[-20, -20, -20]} intensity={0.5} color={color} />
      <a.pointLight position={[0, 0, 5]} distance={5} intensity={5} color={color} />
      <a.spotLight
        color={color}
        position={[10, 20, 20]}
        angle={0.1}
        intensity={2}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.00001}
        castShadow
      />
      <Suspense fallback={null}>
        <Switch />
      </Suspense>
      <mesh receiveShadow renderOrder={1000} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <a.shadowMaterial transparent opacity={x.to((x) => 0.1 + x * 0.2)} />
      </mesh>
    </Canvas>
  );
}

export default Scene;

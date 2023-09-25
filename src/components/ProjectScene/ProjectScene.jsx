import styles from './ProjectScene.module.scss';
import React, { Suspense, useContext } from 'react';
import { Canvas } from '@react-three/fiber';
import { a } from '@react-spring/three';
import ToggleContext from '../../context/toggleContext';
import { Objects } from '../AboutObjects/AboutObjects';

function ProjectScene() {
  const { x } = useContext(ToggleContext);
  const color = x.to([0, 1], ['#ffffff', '#ffffff']);

  return (
    <Canvas
      className={styles.projectScene}
      orthographic
      shadows
      dpr={[1, 2]}
      camera={{ zoom: 60, position: [-14, 13, 12], fov: 35 }}>
      <ambientLight intensity={0.1} />
      <directionalLight position={[-20, 20, 20]} intensity={1} />
      <a.directionalLight position={[-20, -20, -20]} intensity={0.5} color={color} />
      <a.pointLight position={[0, 0, 5]} distance={5} intensity={5} color={color} />
      <a.spotLight
        color={color}
        position={[13, 25, 12]}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.00001}
        castShadow
      />

      <Suspense fallback={null}>
        <a.group scale={[1.5, 1.5, 1.5]} castShadow receiveShadow dispose={null}>
          <Objects
            url="./model/arrow.gltf"
            scale={0.75}
            rotation={[1.55, 0, 3.5]}
            position={[0, 0.1, 0]}
          />
        </a.group>
      </Suspense>
      <mesh receiveShadow renderOrder={1000} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <a.shadowMaterial transparent opacity={x.to((x) => 0.1 + x * 0.2)} />
      </mesh>
    </Canvas>
  );
}

export default ProjectScene;

import React, { Suspense, useContext } from 'react';
import { Canvas } from '@react-three/fiber';
import { a } from '@react-spring/three';

import ToggleContext from '../../context/toggleContext';

import styles from './AboutScene.module.scss';
import AboutFont from '../AboutFont/AboutFont';

function AboutScene() {
  const { x } = useContext(ToggleContext);
  const color = x.to([0, 1], ['#212529', '#212529']);

  return (
    <Canvas
      className={styles.canvas}
      orthographic
      shadows
      dpr={[1, 2]}
      camera={{ zoom: 80, position: [-10, 10, 10], fov: 35 }}>
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
        <AboutFont />
      </Suspense>
      <mesh receiveShadow renderOrder={1000} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <a.shadowMaterial transparent opacity={x.to((x) => 0.1 + x * 0.2)} />
      </mesh>
    </Canvas>
  );
}

export default AboutScene;

// function HeadPhone(props) {
//   const { scene } = useGLTF(
//     'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/headphones/model.gltf'
//   );
//   return <primitive object={scene} {...props} />;
// }

// function Book(props) {
//   const { scene } =
//     'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/open-book/model.gltf';
//   return <primitive object={scene} {...props} />;
// }

// function Plant(props) {
//   const { scene } = useGLTF(
//     'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/plant/model.gltf'
//   );
//   return <primitive object={scene} {...props} />;
// }

// function Cactus(props) {
//   const { scene } = useGLTF(
//     'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cactus/model.gltf'
//   );
//   return <primitive object={scene} {...props} />;
// }

// function Bread(props) {
//   const { scene } = useGLTF(
//     'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bread/model.gltf'
//   );
//   return <primitive object={scene} {...props} />;
// }

// function CandyBar(props) {
//   const { scene } = useGLTF(
//     'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/candy-bar-wrapper/model.gltf'
//   );
//   return <primitive object={scene} {...props} />;
// }

// function Coffee(props) {
//   const { scene } = useGLTF(
//     'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cup-tea/model.gltf'
//   );
//   return <primitive object={scene} {...props} />;
// }

// function Croissant(props) {
//   const { scene } = useGLTF(
//     'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/croissant/model.gltf'
//   );
//   return <primitive object={scene} {...props} />;
// }

// function Chocolate(props) {
//   const { scene } = useGLTF(
//     'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/chocolate-wrapper/model.gltf'
//   );
//   return <primitive object={scene} {...props} />;
// }

// function Cookie(props) {
//   const { scene } = useGLTF(
//     'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cookie/model.gltf'
//   );
//   return <primitive object={scene} {...props} />;
// }

// function CuttingBoard(props) {
//   const { scene } = useGLTF(
//     'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cutting-board-japanese/model.gltf'
//   );
//   return <primitive object={scene} {...props} />;
// }

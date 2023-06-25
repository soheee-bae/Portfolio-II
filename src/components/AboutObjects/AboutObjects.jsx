import { useGLTF } from '@react-three/drei';
import { useAbout } from '../../hooks/useAbout';
import { useState } from 'react';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';

function AboutObjects() {
  const { setAboutSection } = useAbout();
  const [hover, setHover] = useState(0);

  const { x } = useSpring({
    x: hover,
    config: { mass: 5, tension: 400, friction: 100, precision: 0.0001 }
  });

  const py = x.to([0, 1], [0.07, 0.3]);

  return (
    <a.group scale={[1.5, 1.5, 1.5]} castShadow receiveShadow dispose={null}>
      <Objects
        url="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/book/model.gltf"
        scale={1.6}
        rotation={[-1.57, 0, 2.2]}
        position-x={0.5}
        py={py}
        position-z={3}
        onClick={() => {
          setAboutSection('education');
        }}
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer';
          setHover(1);
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default';
          setHover(0);
        }}
      />
      <Objects
        url="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
        scale={0.45}
        rotation={[0, -0.4, 0]}
        position={[1, -0.01, -2.6]}
        onClick={() => {
          setAboutSection('skill');
        }}
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer';
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default';
        }}
      />
      <Objects
        url="./model/flag.gltf"
        scale={0.3}
        rotation={[0, -0.6, 0]}
        position={[2.1, -0.01, 0.8]}
      />
      <Objects
        url="./model/arrow.gltf"
        scale={0.75}
        rotation={[1.55, 0, 3.5]}
        position={[-1.2, 0.65, 1.85]}
      />
      <Objects
        url="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
        scale={0.26}
        rotation={[0, 0.5, 0]}
        position={[-1.5, -0.12, 0]}
        onClick={() => {
          setAboutSection('career');
        }}
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer';
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default';
        }}
      />
      <Objects
        url="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cup-saucer/model.gltf"
        scale={1.2}
        position={[-2.5, 0.01, 0]}
      />
      <Objects
        url="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/cup-tea/model.gltf"
        scale={1.2}
        position={[-2.5, 0.04, 0]}
      />
      <Objects url="./model/plant.gltf" scale={0.3} position={[0.1, 0.01, -0.5]} />
      <Objects
        url="./model/headphone.gltf"
        scale={0.2}
        rotation={[1.57, 0, 0]}
        position={[-2.3, 0.2, -1.6]}
      />
    </a.group>
  );
}

export default AboutObjects;

function Objects(props) {
  const { scene } = useGLTF(props.url);
  scene.traverse(function (node) {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
    }
  });

  return (
    <a.mesh
      receiveShadow
      castShadow
      onClick={props.onClick}
      onPointerEnter={props.onPointerEnter}
      onPointerLeave={props.onPointerLeave}
      position-y={props.py}>
      <primitive receiveShadow castShadow object={scene} {...props} />
    </a.mesh>
  );
}

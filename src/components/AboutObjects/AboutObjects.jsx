import { useContext, useState } from 'react';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';
import CursorContext from '../../context/cursorContext';

function AboutObjects({ aboutSection, setAboutSection, setAnimation }) {
  const [bookHover, setBookHover] = useState(0);
  const [macHover, setMacHover] = useState(0);
  const [targetHover, setTargetHover] = useState(0);
  const { textEnter, textLeave } = useContext(CursorContext);

  const { book, mac, target } = useSpring({
    book: bookHover,
    mac: macHover,
    target: targetHover,
    config: { mass: 5, tension: 400, friction: 100, precision: 0.0001 }
  });

  const bookY = book.to([0, 1], [0.3, 0.45]);
  const macY = mac.to([0, 1], [-0.12, 0.15]);
  const targetY = target.to([0, 1], [-0.01, 0.2]);

  return (
    <a.group scale={[2.1, 2.1, 2.1]} castShadow receiveShadow dispose={null}>
      <OrbitControls />
      {/* Target model */}
      <Objects
        url="./model/arrow.gltf"
        scale={0.65}
        rotation={[1, 0.47, 4.3]}
        position={[1.2, 0.11, -1.9]}
      />
      <Objects
        url="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
        scale={0.41}
        rotation={[0, -0.35, 0]}
        position-x={1.1}
        position-z={-2.5}
        py={targetY}
        onClick={() => {
          setAboutSection('skill');
          setAnimation(true);
        }}
        onPointerEnter={() => {
          setTargetHover(1);
          textEnter('click');
        }}
        onPointerLeave={() => {
          setTargetHover(0);
          if (!aboutSection) {
            textEnter('about');
          } else {
            textLeave();
          }
        }}
      />
      <Objects url="./model/plant.gltf" scale={0.4} position={[0.3, 0, 0.7]} />
      {/* Book Model*/}
      <Objects
        url="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bookcase/model.gltf"
        scale={0.63}
        rotation={[0, -1.3, 0]}
        position={[1, 0, 1]}
      />
      <Objects
        url="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/chair-wood/model.gltf"
        scale={0.6}
        rotation={[0, -0.7, 0]}
        position={[0.6, 0, 0.4]}
      />
      <Objects
        url="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/open-book/model.gltf"
        scale={0.77}
        rotation={[0, -0.2, 0]}
        position-x={0.55}
        position-z={0.48}
        py={bookY}
        onClick={() => {
          setAboutSection('education');
          setAnimation(true);
        }}
        onPointerEnter={() => {
          setBookHover(1);
          textEnter('click');
        }}
        onPointerLeave={() => {
          setBookHover(0);
          if (!aboutSection) {
            textEnter('about');
          } else {
            textLeave();
          }
        }}
      />
      {/* Laptop Model*/}
      <Objects
        url="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
        scale={0.26}
        rotation={[0, 0.5, 0]}
        position-x={-1.5}
        position-z={0}
        py={macY}
        onClick={() => {
          setAboutSection('career');
          setAnimation(true);
        }}
        onPointerEnter={() => {
          setMacHover(1);
          textEnter('click');
        }}
        onPointerLeave={() => {
          setMacHover(0);
          if (!aboutSection) {
            textEnter('about');
          } else {
            textLeave();
          }
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

export function Objects(props) {
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

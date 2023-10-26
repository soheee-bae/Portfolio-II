// import { useContext, useState } from 'react';
import { useGLTF, OrbitControls } from '@react-three/drei';
// import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';

// import CursorContext from '../../context/cursorContext';

function AboutObjects({ aboutSection, setAboutSection, setAnimation }) {
  const { nodes, materials } = useGLTF('./model/keyboard.glb');
  console.log({ aboutSection, setAboutSection, setAnimation });

  // const [bookHover, setBookHover] = useState(0);
  // const [macHover, setMacHover] = useState(0);
  // const [targetHover, setTargetHover] = useState(0);
  // const { textEnter, textLeave } = useContext(CursorContext);

  // const { book, mac, target } = useSpring({
  //   book: bookHover,
  //   mac: macHover,
  //   target: targetHover,
  //   config: { mass: 5, tension: 400, friction: 100, precision: 0.0001 }
  // });

  // const bookY = book.to([0, 1], [0.3, 0.45]);
  // const macY = mac.to([0, 1], [-0.12, 0.15]);
  // const targetY = target.to([0, 1], [-0.01, 0.2]);

  console.log(nodes);
  console.log(materials);
  return (
    <a.group scale={[2.1, 2.1, 2.1]} castShadow receiveShadow dispose={null}>
      <OrbitControls />
      <a.mesh
        receiveShadow
        castShadow
        material={nodes.Cube.material}
        geometry={nodes.Cube.geometry}
        // material-color={'#000000'}
        material-roughness={0.8}
        scale={nodes.Cube.scale}
        rotation={nodes.Cube.rotation}
        position={nodes.Cube.position}
      />
      <AboutKey nodes={nodes} />
      <EducationKey nodes={nodes} />
      <SkillsKey nodes={nodes} />
      <CareersKey nodes={nodes} />

      {/* <a.pointLight position={[2, 4, 3]} distance={15} intensity={80} /> */}
    </a.group>
  );
}
//       <Shadow renderOrder={-1000} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={3} />

export default AboutObjects;

function AboutKey({ nodes }) {
  return (
    <a.group castShadow receiveShadow dispose={null}>
      <a.mesh
        receiveShadow
        castShadow
        material={nodes.Cube001.material}
        geometry={nodes.Cube001.geometry}
        // material-color={'#304529'}
        material-roughness={0.8}
        scale={nodes.Cube001.scale}
        rotation={nodes.Cube001.rotation}
        position={nodes.Cube001.position}
      />
      <a.mesh
        receiveShadow
        castShadow
        material={nodes.Text003.material}
        geometry={nodes.Text003.geometry}
        material-color={'#000000'}
        material-roughness={0.8}
        scale={nodes.Text003.scale}
        rotation={nodes.Text003.rotation}
        position={nodes.Text003.position}
      />
    </a.group>
  );
}

function EducationKey({ nodes }) {
  return (
    <a.group castShadow receiveShadow dispose={null}>
      <a.mesh
        receiveShadow
        castShadow
        material={nodes.Cube003.material}
        geometry={nodes.Cube003.geometry}
        material-color={'#304529'}
        material-roughness={0.8}
        scale={nodes.Cube003.scale}
        rotation={nodes.Cube003.rotation}
        position={nodes.Cube003.position}
      />
      <a.mesh
        receiveShadow
        castShadow
        material={nodes.Text.material}
        geometry={nodes.Text.geometry}
        material-color={'#000000'}
        material-roughness={0.8}
        scale={nodes.Text.scale}
        rotation={nodes.Text.rotation}
        position={nodes.Text.position}
      />
    </a.group>
  );
}

function SkillsKey({ nodes }) {
  return (
    <a.group castShadow receiveShadow dispose={null}>
      <a.mesh
        receiveShadow
        castShadow
        material={nodes.Cube002.material}
        geometry={nodes.Cube002.geometry}
        // material-color={'#def1ed'}
        material-roughness={0.8}
        scale={nodes.Cube002.scale}
        rotation={nodes.Cube002.rotation}
        position={nodes.Cube002.position}
      />
      <a.mesh
        receiveShadow
        castShadow
        material={nodes.Text002.material}
        geometry={nodes.Text002.geometry}
        material-color={'#000000'}
        material-roughness={0.8}
        scale={nodes.Text002.scale}
        rotation={nodes.Text002.rotation}
        position={nodes.Text002.position}
      />
    </a.group>
  );
}

function CareersKey({ nodes }) {
  return (
    <a.group castShadow receiveShadow dispose={null}>
      <a.mesh
        receiveShadow
        castShadow
        material={nodes.Cube004.material}
        geometry={nodes.Cube004.geometry}
        // material-color={'#01b8aa'}
        material-roughness={0.8}
        scale={nodes.Cube004.scale}
        rotation={nodes.Cube004.rotation}
        position={nodes.Cube004.position}
      />
      <a.mesh
        receiveShadow
        castShadow
        material={nodes.Text001.material}
        geometry={nodes.Text001.geometry}
        material-color={'#000000'}
        material-roughness={0.8}
        scale={nodes.Text001.scale}
        rotation={nodes.Text001.rotation}
        position={nodes.Text001.position}
      />
    </a.group>
  );
}
//  <Objects
//         url="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
//         scale={0.41}
//         rotation={[0, -0.35, 0]}
//         position-x={1.1}
//         position-z={-2.5}
//         py={targetY}
//         onClick={() => {
//           setAboutSection('skill');
//           setAnimation(true);
//         }}
//         onPointerEnter={() => {
//           setTargetHover(1);
//           textEnter('click');
//         }}
//         onPointerLeave={() => {
//           setTargetHover(0);
//           if (!aboutSection) {
//             textEnter('about');
//           } else {
//             textLeave();
//           }
//         }}
//       />

//       <Objects
//         url="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/open-book/model.gltf"
//         scale={0.77}
//         rotation={[0, -0.2, 0]}
//         position-x={0.55}
//         position-z={0.48}
//         py={bookY}
//         onClick={() => {
//           setAboutSection('education');
//           setAnimation(true);
//         }}
//         onPointerEnter={() => {
//           setBookHover(1);
//           textEnter('click');
//         }}
//         onPointerLeave={() => {
//           setBookHover(0);
//           if (!aboutSection) {
//             textEnter('about');
//           } else {
//             textLeave();
//           }
//         }}
//       />
//       {/* Laptop Model*/}
//       <Objects
//         url="https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
//         scale={0.26}
//         rotation={[0, 0.5, 0]}
//         position-x={-1.5}
//         position-z={0}
//         py={macY}
//         onClick={() => {
//           setAboutSection('career');
//           setAnimation(true);
//         }}
//         onPointerEnter={() => {
//           setMacHover(1);
//           textEnter('click');
//         }}
//         onPointerLeave={() => {
//           setMacHover(0);
//           if (!aboutSection) {
//             textEnter('about');
//           } else {
//             textLeave();
//           }
//         }}
//       />

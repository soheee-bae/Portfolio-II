import { useEffect, useState, useContext } from 'react';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';

import CursorContext from '../../context/cursorContext';

function AboutObjects({ aboutSection, setAboutSection, setAnimation }) {
  const { nodes } = useGLTF('./model/keyboard.glb');
  const { textEnter, textLeave } = useContext(CursorContext);

  const [educationClick, setEducationClick] = useState(1);
  const [careersClick, setCareersClick] = useState(1);
  const [skillsClick, setSkillsClick] = useState(1);

  const { education, careers, skills } = useSpring({
    education: educationClick,
    careers: careersClick,
    skills: skillsClick,
    config: { mass: 5, tension: 400, friction: 100, precision: 0.0001 }
  });

  useEffect(() => {
    if (aboutSection === 'education') {
      setCareersClick(1);
      setSkillsClick(1);
      setEducationClick(0);
    } else if (aboutSection === 'career') {
      setSkillsClick(1);
      setEducationClick(1);
      setCareersClick(0);
    } else if (aboutSection === 'skill') {
      setCareersClick(1);
      setEducationClick(1);
      setSkillsClick(0);
    }
  }, [aboutSection]);

  return (
    <a.group
      scale={[2.1, 2.1, 2.1]}
      castShadow
      receiveShadow
      dispose={null}
      onPointerEnter={() => {
        textEnter('click');
      }}
      onPointerLeave={() => {
        textLeave();
      }}
    >
      <OrbitControls
        minAzimuthAngle={-0.6}
        maxAzimuthAngle={0.5}
        minPolarAngle={-0.5}
        maxPolarAngle={0.8}
        enableZoom={false}
      />
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
      <EducationKey
        nodes={nodes}
        setAnimation={setAnimation}
        aboutSection={aboutSection}
        setAboutSection={setAboutSection}
        education={education}
        educationClick={educationClick}
        setEducationClick={setEducationClick}
      />
      <SkillsKey
        nodes={nodes}
        setAnimation={setAnimation}
        aboutSection={aboutSection}
        setAboutSection={setAboutSection}
        skills={skills}
        skillsClick={skillsClick}
        setSkillsClick={setSkillsClick}
      />
      <CareersKey
        nodes={nodes}
        setAnimation={setAnimation}
        aboutSection={aboutSection}
        setAboutSection={setAboutSection}
        careers={careers}
        careersClick={careersClick}
        setCareersClick={setCareersClick}
      />

      <a.pointLight position={[0, 15, 0]} distance={21} intensity={80} />
    </a.group>
  );
}

export default AboutObjects;

function AboutKey({ nodes }) {
  return (
    <a.group castShadow receiveShadow dispose={null}>
      <a.mesh
        receiveShadow
        castShadow
        material={nodes.Cube001.material}
        geometry={nodes.Cube001.geometry}
        material-color={'#999999'}
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

function EducationKey({
  nodes,
  setAnimation,
  aboutSection,
  setAboutSection,
  education,
  educationClick,
  setEducationClick
}) {
  const educationY = education.to([0, 1], [0.55, nodes.Cube003.position.y]);
  const educationTextY = education.to([0, 1], [0.75, nodes.Text.position.y]);

  return (
    <a.group
      castShadow
      receiveShadow
      dispose={null}
      onClick={() => {
        if (aboutSection === 'education') {
          setAboutSection('');
        } else {
          setAboutSection('education');
        }
        setEducationClick(educationClick === 0 ? 1 : 0);
        setAnimation(true);
      }}
    >
      <a.mesh
        receiveShadow
        castShadow
        material={nodes.Cube003.material}
        geometry={nodes.Cube003.geometry}
        // material-color={'#304529'}
        material-roughness={0.8}
        scale={nodes.Cube003.scale}
        rotation={nodes.Cube003.rotation}
        position-z={nodes.Cube003.position.z}
        position-x={nodes.Cube003.position.x}
        position-y={educationY}
      />
      <a.mesh
        receiveShadow
        castShadow
        material={nodes.Text.material}
        geometry={nodes.Text.geometry}
        material-color={'#242424'}
        material-roughness={0.8}
        scale={nodes.Text.scale}
        rotation={nodes.Text.rotation}
        position-z={nodes.Text.position.z}
        position-x={nodes.Text.position.x}
        position-y={educationTextY}
      />
    </a.group>
  );
}

function SkillsKey({
  nodes,
  setAnimation,
  aboutSection,
  setAboutSection,
  skills,
  skillsClick,
  setSkillsClick
}) {
  const skillY = skills.to([0, 1], [0.55, nodes.Cube002.position.y]);
  const skillTextY = skills.to([0, 1], [0.75, nodes.Text002.position.y]);

  return (
    <a.group
      castShadow
      receiveShadow
      dispose={null}
      onClick={() => {
        if (aboutSection === 'skill') {
          setAboutSection('');
        } else {
          setAboutSection('skill');
        }
        setSkillsClick(skillsClick === 0 ? 1 : 0);
        setAnimation(true);
      }}
    >
      <a.mesh
        receiveShadow
        castShadow
        material={nodes.Cube002.material}
        geometry={nodes.Cube002.geometry}
        // material-color={'#def1ed'}
        material-roughness={0.8}
        scale={nodes.Cube002.scale}
        rotation={nodes.Cube002.rotation}
        position-z={nodes.Cube002.position.z}
        position-x={nodes.Cube002.position.x}
        position-y={skillY}
      />
      <a.mesh
        receiveShadow
        castShadow
        material={nodes.Text002.material}
        geometry={nodes.Text002.geometry}
        material-color={'#242424'}
        material-roughness={0.8}
        scale={nodes.Text002.scale}
        rotation={nodes.Text002.rotation}
        position-z={nodes.Text002.position.z}
        position-x={nodes.Text002.position.x}
        position-y={skillTextY}
      />
    </a.group>
  );
}

function CareersKey({
  nodes,
  setAnimation,
  aboutSection,
  setAboutSection,
  careers,
  careersClick,
  setCareersClick
}) {
  const careerY = careers.to([0, 1], [0.55, nodes.Cube004.position.y]);
  const careerTextY = careers.to([0, 1], [0.75, nodes.Text001.position.y]);

  return (
    <a.group
      castShadow
      receiveShadow
      dispose={null}
      onClick={() => {
        if (aboutSection === 'career') {
          setAboutSection('');
        } else {
          setAboutSection('career');
        }
        setCareersClick(careersClick === 0 ? 1 : 0);
        setAnimation(true);
      }}
    >
      <a.mesh
        receiveShadow
        castShadow
        material={nodes.Cube004.material}
        geometry={nodes.Cube004.geometry}
        // material-color={'#01b8aa'}
        material-roughness={0.8}
        scale={nodes.Cube004.scale}
        rotation={nodes.Cube004.rotation}
        position-z={nodes.Cube004.position.z}
        position-x={nodes.Cube004.position.x}
        position-y={careerY}
      />
      <a.mesh
        receiveShadow
        castShadow
        material={nodes.Text001.material}
        geometry={nodes.Text001.geometry}
        material-color={'#242424'}
        material-roughness={0.8}
        scale={nodes.Text001.scale}
        rotation={nodes.Text001.rotation}
        position-z={nodes.Text001.position.z}
        position-x={nodes.Text001.position.x}
        position-y={careerTextY}
      />
    </a.group>
  );
}

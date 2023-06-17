import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { a } from '@react-spring/three';
import { useGLTF, useTexture, Shadow, meshBounds, OrbitControls } from '@react-three/drei';
import { Light } from '../../icons';
import { useToggle } from '../../hooks/useToggle';

function Switch() {
  const { x, setToggle } = useToggle();
  const { nodes, materials } = useGLTF('./model/metal.glb');
  const texture = useTexture('./model/onoff.jpg');

  const onClick = useCallback(() => setToggle((toggle) => Number(!toggle)), [setToggle]);

  const pZ = x.to([0, 1], [-1.2, 1.2]);
  const rX = x.to([0, 1], [0, Math.PI * 1.3]);
  const color = x.to([0, 1], ['#212529', '#212529']);
  const ballColor = x.to([0, 1], ['#E9ECEF', '#343A40']);

  return (
    <group scale={[1.25, 1.25, 1.25]} dispose={null}>
      {/* <OrbitControls /> */}
      <a.mesh
        receiveShadow
        castShadow
        material={materials.track}
        geometry={nodes.Circle.geometry}
        material-color={'#000000'}
        material-roughness={0.8}
        material-metalness={0.8}
        scale={[1.1, 1.0, 1.2]}
        rotation={[0, 1.55, 0]}
        position={[0, 0, 0.05]}
      />
      <a.group position-y={0.85} position-z={pZ}>
        <a.mesh receiveShadow castShadow rotation-x={rX} onClick={onClick}>
          <sphereGeometry args={[0.8, 64, 64]} />
          <a.meshStandardMaterial color={ballColor} map={texture} />
        </a.mesh>
        <a.pointLight position={[2, 4, 3]} distance={15} intensity={80} color={color} />
        <Shadow
          renderOrder={-1000}
          position={[0, -1, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.5}
        />
      </a.group>
    </group>
  );
}
export default Switch;

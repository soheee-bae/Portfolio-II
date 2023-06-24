import React from 'react';
import { OrbitControls, Text3D, useMatcapTexture } from '@react-three/drei';
// import { a } from '@react-spring/three';

function AboutFont() {
  const geometries = [
    { name: 'A', rotation: [0, 0, 0], position: [0, 0.05, -2] },
    { name: 'B', rotation: [-1.57, 0, 0], position: [1, 0.07, -0.4] },
    { name: 'O', rotation: [0, 1.57, 0], position: [2, 0.1, 0.8] },
    { name: 'U', rotation: [-1.57, 0, -1.57], position: [2.5, 0.07, 0.8] },
    { name: 'T', rotation: [-1.57, 0, 0], position: [1, 0.1, 3] }
  ];

  //AC171C_FA8593_E84854_D3464E
  //CC7C5F_A15436_B26346_AF5C3C
  //D4855F_92512D_AE6742_A75C2C

  //CE8C15_EAC79B_DDAB57_F9C962
  //D1AC04_F8E50A_EDD004_B38D04
  const [matcapTexture] = useMatcapTexture('D1AC04_F8E50A_EDD004_B38D04', 256);

  return (
    <group scale={[1.5, 1.5, 1.5]} dispose={null}>
      <OrbitControls />
      {geometries.map((geo) => (
        <Text3D
          key={geo.name}
          curveSegments={12}
          bevelEnabled
          bevelSize={0.07}
          bevelThickness={0.1}
          bevelOffset={0}
          bevelSegments={6}
          height={0.27}
          position={geo.position}
          receiveShadow
          castShadow
          material-roughness={0.8}
          material-metalness={0.8}
          rotation={geo.rotation}
          font="./fonts/Inter.json">
          {geo.name}
          <meshMatcapMaterial matcap={matcapTexture} />
        </Text3D>
      ))}
    </group>
  );
}
export default AboutFont;

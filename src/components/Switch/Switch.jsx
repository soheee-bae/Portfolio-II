import React, { useCallback, useContext } from 'react';
import { a } from '@react-spring/three';
import { useGLTF, useTexture, Shadow } from '@react-three/drei';

import ToggleContext from '../../context/toggleContext';
import CursorContext from '../../context/cursorContext';
import useBreakpoint from '../../hooks/useBreakpoint';

function Switch() {
  const { x, setToggle } = useContext(ToggleContext);
  const { textEnter, textLeave } = useContext(CursorContext);

  const { nodes } = useGLTF('./model/metal.glb');
  const texture = useTexture('./model/onoff.jpg');

  const onClick = useCallback(() => setToggle((toggle) => Number(!toggle)), [setToggle]);

  const pZ = x.to([0, 1], [-1.2, 1.2]);
  const rX = x.to([0, 1], [0, Math.PI * 1.3]);
  const color = x.to([0, 1], ['#212529', '#212529']);
  const ballColor = x.to([0, 1], ['#e9ecef', '#343a40']);

  const brkPnt = useBreakpoint();
  const isSmallerScale = brkPnt === 'sm' || brkPnt === 'md' || brkPnt === 'lg' || brkPnt === 'xl';
  const scale = isSmallerScale ? [0.3, 0.3, 0.3] : [1.25, 1.25, 1.25];

  return (
    <group scale={scale} dispose={null}>
      <ambientLight intensity={1} />
      <directionalLight position={[-20, 20, 20]} intensity={3} />
      <a.mesh
        receiveShadow
        castShadow
        material={nodes.Circle.material}
        geometry={nodes.Circle.geometry}
        material-color={'#404040'}
        material-receiveShadow="true"
        material-roughness={1}
        material-metalness={1}
        scale={[1.1, 1.2, 1.2]}
        rotation={[0, 1.55, 0]}
        position={[0, 0, 0.05]}
      />
      <a.group position-y={0.85} position-z={pZ}>
        <a.mesh
          receiveShadow
          castShadow
          rotation-x={rX}
          onClick={onClick}
          onPointerEnter={() => {
            textEnter('click');
          }}
          onPointerLeave={() => {
            textLeave();
          }}>
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

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { a } from "@react-spring/three";
import Switch from "./Switch";

function Scene({ x, set }) {
  const color = x.to([0, 1], ["#7fffd4", "#c72f46"]);

  return (
    <Canvas
      orthographic
      shadows
      dpr={[1, 2]}
      camera={{ zoom: 60, position: [-10, 10, 10], fov: 35 }}>
      <ambientLight intensity={0.1} />
      <directionalLight position={[-20, 20, 20]} intensity={1} />
      <a.directionalLight
        position={[-20, -20, -20]}
        intensity={0.5}
        color={color}
      />
      <a.pointLight
        position={[0, 0, 5]}
        distance={5}
        intensity={5}
        color={color}
      />
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
        <Switch x={x} set={set} />
      </Suspense>
      <mesh
        receiveShadow
        renderOrder={1000}
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <a.shadowMaterial transparent opacity={x.to((x) => 0.1 + x * 0.2)} />
      </mesh>
    </Canvas>
  );
}

export default Scene;

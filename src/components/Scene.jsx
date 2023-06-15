import React, { useState, useEffect, useCallback, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { a } from "@react-spring/three";

function Scene() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <a.mesh>
          <sphereGeometry />
          <a.meshStandardMaterial />
        </a.mesh>
      </Suspense>
      <mesh
      // receiveShadow
      // renderOrder={1000}
      // position={[0, 0, 0]}
      // rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[10, 10]} />
        <a.shadowMaterial transparent opacity={x.to((x) => 0.1 + x * 0.2)} />
      </mesh>
    </Canvas>
  );
}

export default Scene;

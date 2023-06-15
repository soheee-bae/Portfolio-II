import React, { useState, useEffect, useCallback, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { a } from "@react-spring/three";
import { useGLTF, useTexture, Shadow, meshBounds } from "@react-three/drei";

function Switch({ x, set }) {
  const onClick = useCallback(() => set((toggle) => Number(!toggle)), [set]);

  const pZ = x.to([0, 1], [-1.2, 1.2]);
  const rX = x.to([0, 1], [0, Math.PI * 1.3]);
  const color = x.to([0, 1], ["#888", "#2a2a2a"]);
  const ballColor = x.to([0, 1], ["#ffffff", "#f9283f"]);

  return (
    <group scale={[1.25, 1.25, 1.25]} dispose={null}>
      <a.group position-y={0.85} position-z={pZ}>
        <a.mesh receiveShadow castShadow rotation-x={rX} onClick={onClick}>
          <sphereGeometry args={[0.8, 64, 64]} />
          <a.meshStandardMaterial color={ballColor} />
        </a.mesh>
        <a.pointLight intensity={100} distance={1.4} color={color} />
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

import { Suspense } from "react";
import Placeholder from "../Placeholder/Placeholder";

import {
  OrbitControls,
  useGLTF,
  AccumulativeShadows,
  RandomizedLight,
  Shadow,
} from "@react-three/drei";

function Background() {
  const model = useGLTF("./model/backgroundModels.glb");

  return (
    <>
      <color args={["#1c1c24"]} attach="background" />
      <Suspense fallback={<Placeholder />}>
        <primitive object={model.scene} />;
      </Suspense>
      <OrbitControls />
      <AccumulativeShadows
        position={[0, -0.99, 0]}
        scale={10}
        color="#316d39"
        opacity={0.8}
        frames={Infinity}
        temporal
        blend={100}>
        <RandomizedLight
          amount={8}
          radius={1}
          ambient={0.5}
          intensity={1}
          position={[1, 2, 3]}
          bias={0.001}
        />
      </AccumulativeShadows>

      <directionalLight
        // ref={directionalLight}
        // position={sunPosition}
        intensity={1.5}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
      />

      <ambientLight intensity={0.5} />
      {/* <Environment preset="city" /> */}
      <Shadow
        color="black"
        colorStop={0}
        opacity={0.5}
        fog={false} // Reacts to fog (default=false)
      />
    </>
  );
}

export default Background;

import "./App.css";
import { Canvas } from "@react-three/fiber";
import Background from "./components/Background/Background";

function App() {
  return (
    <Canvas
      shadows
      camera={{
        fov: 60,
        near: 0.1,
        far: 400,
        position: [0, 10, 200],
      }}>
      <Background />
    </Canvas>
  );
}

export default App;

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
} from "@react-three/drei";

import Room from "./Room";

const ThreeScene = () => {
  return (
    <Canvas
      shadows
      camera={{
        position: [0, 2, 6],
        fov: 50,
      }}

      style={{
        width: "100vw",
        height: "100vh",
        background: "#111111",
      }}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.7} />

      {/* Main Light */}
      <directionalLight
        castShadow
        position={[5, 5, 5]}
        intensity={2}
      />

      {/* Floating Room */}
      <Float
        speed={2}
        rotationIntensity={0.2}
        floatIntensity={0.5}
      >
        <Room />
      </Float>

      {/* Controls */}
      <OrbitControls
        enableZoom={true}
      />
    </Canvas>
  );
};

export default ThreeScene;
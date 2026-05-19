import { Canvas } from "@react-three/fiber";

import {
  OrbitControls,
  Float,
  Environment,
} from "@react-three/drei";

import Room from "./Room";

const ThreeScene = () => {
  return (
    <Canvas
      shadows

      camera={{
        position: [0, 1, 8],
        fov: 60,
      }}

      style={{
        width: "100vw",
        height: "100vh",
        background: "#111111",
      }}
    >
      {/* Lights */}
      <ambientLight intensity={2} />

      <directionalLight
        position={[5, 10, 5]}
        intensity={3}
        castShadow
      />

      {/* Environment */}
      <Environment preset="city" />

      {/* Room Model */}
      <Float
        speed={1}
        rotationIntensity={0.1}
        floatIntensity={0.2}
      >
        <Room />
      </Float>

      {/* Controls */}
      <OrbitControls />

    </Canvas>
  );
};

export default ThreeScene;
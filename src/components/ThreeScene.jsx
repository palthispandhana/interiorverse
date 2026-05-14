import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Cube() {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[2, 2, 2]} />

      <meshStandardMaterial
        color="#00ffcc"
        metalness={0.5}
        roughness={0.2}
      />
    </mesh>
  );
}

const ThreeScene = () => {
  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
        background: "#111111",
      }}
    >
      {/* Lights */}
      <ambientLight intensity={0.5} />

      <directionalLight
        position={[2, 2, 5]}
        intensity={1}
      />

      {/* Cube */}
      <Cube />

      {/* Controls */}
      <OrbitControls />
    </Canvas>
  );
};

export default ThreeScene;
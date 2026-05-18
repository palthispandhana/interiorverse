import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { useRef } from "react";

function Cube() {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />

      <meshStandardMaterial
        color="#22d3ee"
        metalness={0.5}
        roughness={0.2}
      />
    </mesh>
  );
}

const ThreeScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{
        width: "100vw",
        height: "100vh",
        background: "#111111",
      }}
    >
      {/* Ambient Light */}
      <ambientLight intensity={0.5} />

      {/* Directional Light */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      {/* Floating Cube */}
      <Float
        speed={2}
        rotationIntensity={1}
        floatIntensity={2}

        speed={3}
rotationIntensity={2}
floatIntensity={3}
      >
        <Cube />
      </Float>

      {/* Camera Controls */}
      <OrbitControls enableZoom={true} />

      camera={{ position: [0, 0, 6], fov: 50 }}
    </Canvas>
  );
};

export default ThreeScene;
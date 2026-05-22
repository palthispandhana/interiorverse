import { Canvas } from "@react-three/fiber";

import {
  OrbitControls,
  Float,
  Environment,
} from "@react-three/drei";

import { useState } from "react";

import InteractiveObject from "./InteractiveObject";

import InfoCard from "./InfoCard";

import ColorPicker from "./ColorPicker";

const ThreeScene = () => {

  const [selected, setSelected] =
    useState(null);

  const [objectColor, setObjectColor] =
    useState("#22d3ee");

  return (
    <div className="relative w-full h-screen">

      {/* Info Card */}
      <InfoCard selected={selected} />

      {/* Color Picker */}
      <ColorPicker
        setObjectColor={setObjectColor}
      />

      <Canvas
        shadows

        camera={{
          position: [0, 2, 8],
          fov: 50,
        }}

        style={{
          width: "100vw",
          height: "100vh",
          background: "#111111",
        }}
      >
        {/* Lights */}
        <ambientLight intensity={1} />

        <directionalLight
          position={[5, 10, 5]}
          intensity={3}
          castShadow
        />

        <Environment preset="city" />

        {/* Interactive Object */}
        <Float
          speed={2}
          rotationIntensity={1}
          floatIntensity={1}
        >
          <InteractiveObject
            position={[0, 0, 0]}
            color={objectColor}
            title="Custom Furniture"
            setSelected={setSelected}
          />
        </Float>

        {/* Floor */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -2, 0]}
          receiveShadow
        >
          <planeGeometry
            args={[50, 50]}
          />

          <shadowMaterial
            opacity={0.3}
          />
        </mesh>

        {/* Controls */}
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
        />

      </Canvas>

    </div>
  );
};

export default ThreeScene;
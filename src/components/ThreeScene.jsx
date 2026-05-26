import { Canvas } from "@react-three/fiber";

import {
  OrbitControls,
  Float,
  Environment,
} from "@react-three/drei";

import { useState } from "react";

import InfoCard from "./InfoCard";

import ColorPicker from "./ColorPicker";

import RoomSelector from "./RoomSelector";

import DynamicRoom from "./DynamicRoom";

const ThreeScene = () => {

  const [selected, setSelected] =
    useState(null);

  const [objectColor, setObjectColor] =
    useState("#22d3ee");

  const [currentRoom, setCurrentRoom] =
    useState("Living Room");

  return (
    <div className="relative w-full h-screen">

      {/* UI */}
      <InfoCard selected={selected} />

      <ColorPicker
        setObjectColor={setObjectColor}
      />

      <RoomSelector
        currentRoom={currentRoom}
        setCurrentRoom={setCurrentRoom}
      />

      {/* 3D Scene */}
      <Canvas
  shadows

  dpr={[1, 1.5]}

  camera={{
    position: [0, 2, 8],
    fov: 50,
  }}

  gl={{
    antialias: true,
    alpha: false,
    powerPreference: "high-performance",
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

        {/* Dynamic Room */}
        <Float
          speed={2}
          rotationIntensity={1}
          floatIntensity={1}
        >
          <DynamicRoom
            currentRoom={currentRoom}
            color={objectColor}
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
  enableDamping
  dampingFactor={0.05}
  autoRotate
  autoRotateSpeed={0.5}
/>
      </Canvas>

    </div>
  );
};

export default ThreeScene;
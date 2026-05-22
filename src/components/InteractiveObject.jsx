import { useRef, useState } from "react";

import { useFrame } from "@react-three/fiber";

const InteractiveObject = ({
  position,
  color,
  title,
  setSelected,
}) => {

  const meshRef = useRef();

  const [hovered, setHovered] =
    useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh
      ref={meshRef}

      position={position}

      scale={hovered ? 1.2 : 1}

      onPointerOver={() =>
        setHovered(true)
      }

      onPointerOut={() =>
        setHovered(false)
      }

      onClick={() =>
        setSelected({
          title,
          color,
        })
      }

      castShadow
    >
      {/* Geometry */}
      <torusKnotGeometry
        args={[0.8, 0.3, 128, 32]}
      />

      {/* Material */}
      <meshStandardMaterial
        color={hovered ? "#ffffff" : color}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
};

export default InteractiveObject;
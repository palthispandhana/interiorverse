const DynamicRoom = ({
  currentRoom,
}) => {

  let color = "#22d3ee";

  let geometry =
    <boxGeometry args={[2, 2, 2]} />;

  if (currentRoom === "Bedroom") {
    color = "#a855f7";

    geometry =
      <sphereGeometry
        args={[1.5, 64, 64]}
      />;
  }

  if (currentRoom === "Workspace") {
    color = "#f43f5e";

    geometry =
      <torusKnotGeometry
        args={[1, 0.35, 128, 32]}
      />;
  }

  return (
    <mesh castShadow>

      {geometry}

      <meshStandardMaterial
        color={color}
        metalness={0.8}
        roughness={0.2}
      />

    </mesh>
  );
};

export default DynamicRoom;
import { useGLTF } from "@react-three/drei";

const Room = () => {
  const model = useGLTF("/src/models/room.glb");

  return (
    <primitive
      object={model.scene}
      scale={1.5}
      position={[0, -1, 0]}
    />
  );
};

export default Room;
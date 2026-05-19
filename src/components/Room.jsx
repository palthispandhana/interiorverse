import { useGLTF } from "@react-three/drei";

const Room = () => {
  const { scene } = useGLTF("/models/room.glb");

  return (
    <primitive
      object={scene}
      scale={2}
      position={[0, -1, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  );
};

export default Room;
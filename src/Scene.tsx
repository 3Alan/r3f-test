import {
  Box,
  CameraControls,
  Edges,
  OrthographicCamera,
  View,
} from "@react-three/drei";

export default function Scene() {
  return (
    <>
      <View className="view">
        <OrthographicCamera position={[0, 0, 10]} makeDefault />
        <CameraControls makeDefault />
        <ambientLight intensity={0.3} />
        <Box args={[10, 10, 10]} position={[0, 0, 0]}>
          <meshStandardMaterial color="red" />

          <Edges
            linewidth={4}
            scale={1.1}
            threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
            color="white"
          />
        </Box>
      </View>
      <div>12421421</div>
    </>
  );
}

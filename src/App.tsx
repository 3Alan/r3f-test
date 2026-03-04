import "./App.css";
import { Canvas } from "@react-three/fiber";
import {
  Box,
  CameraControls,
  Edges,
  OrthographicCamera,
  View,
} from "@react-three/drei";
import { Suspense } from "react";

function Scene() {
  return (
    <View style={{ width: 500, height: 500, border: "1px solid red" }}>
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
  );
}

function App() {
  return (
    <>
      <Canvas
        shadows={false}
        eventSource={document.getElementById("root")!}
        onPointerDown={(e) => {
          e.stopPropagation();
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "#282c34",
          // zIndex: -1,
        }}
      >
        <Suspense fallback={null}>
          <View.Port />
        </Suspense>
      </Canvas>

      <Scene />
    </>
  );
}

export default App;

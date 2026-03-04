import { View } from "@react-three/drei";
import Canvas from "./Canvas";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Canvas
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
        <View.Port />
      </Canvas>

      <Link to="/">Home</Link>
      <Link to="/scene">Scene</Link>

      <Outlet />
    </>
  );
}

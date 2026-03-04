import { View } from "@react-three/drei";
import Canvas from "./Canvas";
import { Link, Outlet, useMatches } from "react-router-dom";
import { cn } from "./utils";

export default function Layout() {
  const matches = useMatches();
  const lastPathname = matches[matches.length - 1]?.pathname;
  const isBlankLayout = lastPathname?.includes("/blank-layout");

  return (
    <div className={cn("flex flex-col", !isBlankLayout && "h-[100vh]")}>
      <Canvas
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "#282c34",
          zIndex: -1,
        }}
      >
        <View.Port />
      </Canvas>

      <Link to="/">Home</Link>
      <Link to="/scene">Scene</Link>

      <Outlet />
    </div>
  );
}

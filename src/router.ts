import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Scene from "./Scene";

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/scene",
        Component: Scene,
      },
    ],
  },
]);

export default router;

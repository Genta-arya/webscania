
import { createRoot } from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { path } from "./utils/utils.js";

import MainType from "./view/type/MainType.jsx";
import MainWiring from "./view/wiring/MainWiring.jsx";
import MainWorkshop from "./view/workshop/MainWorkshop.jsx";
import Webview from "./components/Webview.jsx";
import SplashScreen from "./components/SplashScreen.jsx";

const router = createBrowserRouter([
  {
    path: path.home,
    element: <SplashScreen />,
  },
  {
    path: path.type,
    element: <MainType />,
  },
  {
    path: path.wiring,
    element: <MainWiring />,
  },

  {
    path: path.workshop,
    element: <MainWorkshop />,
  },
  {
    path: path.company,
    element: <Webview />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

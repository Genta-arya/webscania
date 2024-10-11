import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { path } from "./utils/utils.js";
import React, { useEffect, useState } from "react";
import MainType from "./view/type/MainType.jsx";
import MainWiring from "./view/wiring/MainWiring.jsx";
import MainWorkshop from "./view/workshop/MainWorkshop.jsx";
import Webview from "./components/Webview.jsx";
import SplashScreen from "./components/SplashScreen.jsx";
import Auth from "./components/Auth.jsx"; // Pastikan ini diimport
import DetailFolder from "./view/workshop/components/Detail/DetailFolder.jsx";
import Notfound from "./components/Notfound.jsx";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (window.location.pathname === path.home) {
      setIsAuthenticated(false);
    }
  }, [isAuthenticated]);

  const handleAuthenticate = (status) => {
    setIsAuthenticated(status);
  };

  const router = createBrowserRouter([
    {
      path: path.home,
      element: <SplashScreen />,
    },
    {
      path: path.auth,
      element: <Auth onAuthenticate={handleAuthenticate} />,
    },
    {
      path: path.type,
      element: isAuthenticated ? (
        <MainType />
      ) : (
        <Auth onAuthenticate={handleAuthenticate} />
      ),
    },
    {
      path: path.wiring,
      element: isAuthenticated ? (
        <MainWiring />
      ) : (
        <Auth onAuthenticate={handleAuthenticate} />
      ),
    },
    {
      path: path.workshop,
      element: isAuthenticated ? (
        <MainWorkshop />
      ) : (
        <Auth onAuthenticate={handleAuthenticate} />
      ),
    },
    {
      path: path.company,
      element: <Webview />,
    },
    {
      path: "/workshop/:id",
      element: isAuthenticated ? (
        <DetailFolder />
      ) : (
        <Auth onAuthenticate={handleAuthenticate} />
      ),
    },
    {
      path: "*",
      element: <Notfound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

createRoot(document.getElementById("root")).render(<App />);

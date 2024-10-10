import React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

const MainContainer = ({ children }) => {
  const location = useLocation();

  return (
    <main>
      {" "}
      {location.pathname === "/"  ? null : <Navbar />}
      <div
        className={`w-full text-black dark:text-white ${
          location.pathname === "/" || location.pathname === "/company" ? "p-0" : "p-4"
        }   h-full     mx-auto`}
      >
        {children}
      </div>
    </main>
  );
};

export default MainContainer;

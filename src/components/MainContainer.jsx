import React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import { Toaster } from "sonner";

const MainContainer = ({ children }) => {
  const location = useLocation();

  return (
    <main>
      {location.pathname === "/" ? null : <Navbar />}
      <div
        className={`w-full  text-black text-xs md:text-base lg:text-base dark:text-white ${
          location.pathname === "/" || location.pathname === "/company"
            ? "p-0"
            : "p-4"
        } h-full mx-auto`}
      >
        {children}
      </div>
      <Toaster richColors position="bottom-center" closeButton />
    </main>
  );
};

export default MainContainer;

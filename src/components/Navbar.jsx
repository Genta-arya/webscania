import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaMoon, FaSun } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { path } from "../utils/utils";
import useSearch from "../libs/Zustand/useSearch";
import { toast, Toaster } from "sonner";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const setSearchQuery = useSearch((state) => state.setSearchQuery);
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.body.classList.add("dark");
    } else {
      setDarkMode(false);
      document.body.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const newMode = !darkMode;

    if (newMode) {
      document.body.classList.add("dark");
      toast.info("Dark mode on", {
        icon: <FaMoon />,
      });
    } else {
      document.body.classList.remove("dark");
      toast.info("Light mode on", {
        icon: <FaSun />,
      });
    }

    localStorage.setItem("darkMode", newMode);
  };

  const handleBack = () => {
    if (location.pathname.startsWith("/workshop/")) {
      navigate("/workshop");
    } else {
      navigate("/");
    }
  };

  return (
    <nav className="flex justify-between items-center p-4 shadow-md dark:border-gray-400 dark:border-b">
      <div className=" font-bold text-black dark:text-white ">
        <div
          className="flex items-center gap-4 cursor-pointer"
          onClick={handleBack}
        >
          <FaChevronLeft />
          <p>Back</p>
        </div>
      </div>
      {location.pathname !== path.company && (
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              className="hidden"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <div className="block bg-gray-400 w-14 h-5 rounded-full"></div>
            <div
              className={`dot absolute left-1 top-1 bg-white w-6 h-3 rounded-md transition ${
                darkMode ? "translate-x-full bg-yellow-400" : "translate-x-0"
              }`}
            ></div>
          </div>
        </label>
      )}
    </nav>
  );
};

export default Navbar;

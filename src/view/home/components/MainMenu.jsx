import React from "react";
import { Link } from "react-router-dom";
import { icon, path } from "../../../utils/utils";
import ImageContainer from "../../../components/ImageContainer";
import bg from "../../../assets/bg.jpg";
import { motion } from "framer-motion"; // Import motion dari framer-motion

const MainMenu = () => {
  // Definisikan animasi untuk menu
  const menuVariants = {
    hidden: { opacity: 0, y: -50 }, // Kondisi awal saat menu di-hidden
    visible: { opacity: 1, y: 0 },   // Kondisi akhir saat menu terlihat
  };

  return (
    <div className="relative flex flex-col justify-center mx-auto h-screen items-center space-y-4 p-4 dark:text-white text-white overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover", 
         
          backgroundPosition: "center",
          filter: "brightness(0.5)",
        }}
      />
      <motion.div
        className="bg-grays bg-opacity-80 rounded-lg shadow-lg p-6 z-10 lg:w-[50%] md:w-[80%] w-full text-sm md:text-base font-bold"
        initial="hidden"
        animate="visible"
        variants={menuVariants}
        transition={{ duration: 0.5 }} // Durasi animasi
      >
        <div className="flex items-center mb-4">
          <div className="flex-grow border-t border-gray-200 dark:border-gray-600"></div>
          <h2 className="text-2xl font-bold text-center mx-4">Menu</h2>
          <div className="flex-grow border-t border-gray-200 dark:border-gray-600"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {/* Link dengan motion.div untuk efek hover */}
          <motion.div
            whileHover={{ scale: 1.05 }} // Efek zoom saat hover
          >
            <Link
              to={path.type}
              className="block p-4 text-center bg-grays rounded-lg shadow-md border-b-4 hover:bg-gray-400 dark:hover:bg-gray-600 transition duration-200"
            >
              <div className="flex justify-center gap-2 items-center">
                <ImageContainer img={icon.search} />
                <span>Type Code List</span>
              </div>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }} // Efek zoom saat hover
          >
            <Link
              to={path.wiring}
              className="block p-4 text-center bg-grays  rounded-lg shadow-md border-b-4 hover:bg-gray-400 dark:hover:bg-gray-600 transition duration-200"
            >
              <div className="flex justify-center gap-2 items-center">
                <ImageContainer img={icon.pdf} />
                <span>Wiring Diagram</span>
              </div>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }} // Efek zoom saat hover
          >
            <Link
              to={path.workshop}
              className="block p-4 text-center bg-grays rounded-lg shadow-md border-b-4 hover:bg-gray-400 dark:hover:bg-gray-600 transition duration-200"
            >
              <div className="flex justify-center gap-2 items-center">
                <ImageContainer img={icon.folder} />
                <span>Workshop Folder</span>
              </div>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }} // Efek zoom saat hover
          >
            <Link
              to={path.company}
              className="block p-4 text-center bg-grays rounded-lg shadow-md border-b-4 hover:bg-gray-400 dark:hover:bg-gray-600 transition duration-200"
            >
              <div className="flex justify-center gap-2 items-center">
                <ImageContainer img={icon.company} />
                <span>About Company</span>
              </div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default MainMenu;

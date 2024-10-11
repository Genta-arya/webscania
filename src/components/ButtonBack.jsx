import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

const ButtonBack = ({ handleBackClick }) => {
  return (
    <button
      onClick={handleBackClick}
      className="mt-4 p-2 w-full hover:scale-95 transition-all duration-200 ease-in flex justify-center bg-grays text-white rounded-lg mb-4 hover:opacity-80"
    >
      <div className="flex items-center gap-2 px-4">
        <FaArrowLeft />
        <p>Back</p>
      </div>
    </button>
  );
};

export default ButtonBack;

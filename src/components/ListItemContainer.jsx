import React from "react";

const ListItemContainer = ({ children, text }) => {
  return (
    <div className="bg-gray-200 mt-4 dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700">
      <div className="p-4">
        <div className="flex justify-center items-center w-full">
          <h2 className="text-lg font-bold text-center border-b-4 p-2 border-gray-500 dark:border-white mb-4 border-t-4 ">
            {text}
          </h2>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ListItemContainer;

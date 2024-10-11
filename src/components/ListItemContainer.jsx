import React from "react";

const ListItemContainer = ({ children , text}) => {
  return (
    <div className="bg-abu mt-4 dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700">
      <div className="p-4">
     
        <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
          {text}
        </h2>
        
        {children}
      </div>
    </div>
  );
};

export default ListItemContainer;

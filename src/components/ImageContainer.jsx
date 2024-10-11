import React from "react";

const ImageContainer = ({ img }) => {
  return (
    <div>
      <img src={img}  className="w-8 md:w-12 lg:w-12" />
    </div>
  );
};

export default ImageContainer;

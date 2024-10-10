import React from "react";

const ImageContainer = ({ img }) => {
  return (
    <div>
      <img src={img}  className="w-12" />
    </div>
  );
};

export default ImageContainer;

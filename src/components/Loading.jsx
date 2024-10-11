import React from "react";
import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center  h-screen mx-auto">
      <FadeLoader color={"#808080"}  />
    </div>
  );
};

export default Loading;

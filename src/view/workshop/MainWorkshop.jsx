import React from "react";
import MainContainer from "../../components/MainContainer";
import Search from "../../components/Search";
import RenderWorkshop from "./components/RenderWorkshop";

const MainWorkshop = () => {
  return (
    <MainContainer>
      {" "}
      <div>
        <Search />
      </div>
      <RenderWorkshop />
    </MainContainer>
  );
};

export default MainWorkshop;

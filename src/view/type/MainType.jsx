import React from "react";
import MainContainer from "../../components/MainContainer";
import Search from "../../components/Search";
import ListType from "./components/ListType";

const MainType = () => {
  return (
    <MainContainer>
      <div>
        <Search />
        <ListType />
      </div>
    </MainContainer>
  );
};

export default MainType;

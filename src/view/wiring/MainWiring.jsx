import React from "react";
import MainContainer from "../../components/MainContainer";
import Search from "../../components/Search.JSX";
import ListWiring from "./components/ListWiring";

const MainWiring = () => {
  return (
    <MainContainer>
      <div>
        <Search />
        <div>
          <ListWiring />
        </div>
      </div>
    </MainContainer>
  );
};

export default MainWiring;

import React from "react";
import Test from "../materials/Test";
import { MainWrapper } from "./MainStyled";

const Main = () => {
  return (
    <MainWrapper>
      <Test text="some text" />
    </MainWrapper>
  );
};

export default Main;

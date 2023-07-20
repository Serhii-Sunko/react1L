import React from "react";
import Test from "../materials/Test";
import { MainWrapper } from "./MainStyled";
import ClassComponent from "../materials/ClassComponent";

const Main = () => {
  return (
    <MainWrapper>
      <Test text="some text" />
      <ClassComponent />
    </MainWrapper>
  );
};

export default Main;

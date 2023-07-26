import React from "react";
import AuthForm from "../auth/AuthForm";
import { MainWrapper } from "./MainStyled";
import LoanForm from "../loanForm/LoanForm";

const Main = () => {
  return (
    <MainWrapper>
      <AuthForm />
      <LoanForm />
    </MainWrapper>
  );
};

export default Main;

import React from "react";
import AuthForm from "../auth/AuthForm";
import { MainWrapper } from "./MainStyled";
import LoanForm from "../loanForm/LoanForm";
import Tasks from "../tasks/Tasks";

const Main = () => {
  return (
    <MainWrapper>
      <AuthForm />
      <LoanForm />
      <Tasks />
    </MainWrapper>
  );
};

export default Main;

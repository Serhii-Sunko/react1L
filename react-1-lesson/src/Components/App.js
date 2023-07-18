import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${({theme})=>(theme=== "white" ? "white" : "black")};
}`

const theme = "white";

const App = () => {
  return (
    <ThemeProvider theme={{theme}} >
      <GlobalStyle theme={theme} />
      <Header />
      <Main />
    </ThemeProvider>
  );
};
export default App;

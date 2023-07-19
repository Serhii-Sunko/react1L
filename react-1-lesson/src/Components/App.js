import React from "react";
import Header from "./header/Header";
import Main from "./main/Main";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${({ current }) =>
    current === "white" ? "white" : "black"};
}`;

// const current = "white";
const current = "dark";

const App = () => {
  return (
    <ThemeProvider theme={{ current }}>
      <GlobalStyle current={current} />
      <Header />
      <Main />
    </ThemeProvider>
  );
};
export default App;

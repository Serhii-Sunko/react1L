import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: #222121;
  align-items: center;
  padding: 0 20px;
  height: 60px;

  .iconMenu {
    width: 40px;
    height: 40px;
    fill: cornflowerblue;

    &:hover {
      fill: red;
      cursor: pointer;
    }
  }
`;

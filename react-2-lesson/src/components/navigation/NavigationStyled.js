import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  .navigationList {
    display: flex;
    align-items: center;
    list-style: none;
  }
  .navigationListItem:not(:last-child) {
    margin-right: 20px;
  }
  .headerListLink {
    text-decoration: none;
    text-transform: uppercase;
    color: cornflowerblue;
    &:hover {
      color: red;
    }
  }
`;

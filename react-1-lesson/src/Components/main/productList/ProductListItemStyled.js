import styled from "styled-components";

export const ProductListItemStyled = styled.li`
.listItemPrice{
    color: ${(props) => (props.price > 20 ? "green" : "red")};
.listItemName{
    color: ${(props) => {
      console.log(props);
      return props.theme.current === "white" ? "green" : "red";
    }};
}`;

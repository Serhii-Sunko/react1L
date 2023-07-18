import styled from 'styled-components';

export const ProductListItemStyled = styled.li`
.ListItemPrice{
    color: ${(props)=> (props.price > 20 ? "green" : "red")};
.ListItemName{
    color: ${(props)=> {return props.theme.theme === "white" ? "green" : "red"}}`
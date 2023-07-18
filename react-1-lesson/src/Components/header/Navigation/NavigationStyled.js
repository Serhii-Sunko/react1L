import styled from 'styled-components';

export const NavigationStyled = styled.nav`

.headerList{
    display: flex;
    align-items: center;
    list-style: none;
.headerListItem:not(:last-child){
    margin-right: 20px;
  
   
}
.headerListLink{
    text-decoration: none;
    text-transform: uppercase;\
    color: cornflowerblue;
      &:hover{
        color: #red
    }
}

}`
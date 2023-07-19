import styled from 'styled-components';

export const NavigationWrapper = styled.nav`
.navigationList{
    display: flex;
    align-items: center;
    list-style: none;
    text-transform: uppercase;
    
}

.navigationListItem {
    color: cornflowerblue;  
}

.navigationListItem:not(:last-child){
    margin-right: 20px;  
}
`
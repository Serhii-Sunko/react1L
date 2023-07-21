import React from 'react'

const List = ({arr}) => {
    return (
        <ul>
            {arr.map((item) => (<li>{item.name}</li>)) }
        </ul>
        
    );
}

export default List;
import React from 'react'

const List = ({arr}) => {
    return (
        <ul>
            {arr.map((item, idx) => (<li key={ idx}>{item.name}</li>)) }
        </ul>
        
    );
}

export default List;
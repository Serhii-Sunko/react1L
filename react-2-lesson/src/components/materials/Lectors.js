import React from 'react'

const Lectors = ({ arr}) => {
    return (
        <ul>
            {arr.map((item) => (<li>{item.name}</li>)) }
        </ul>
        
    );
}

export default Lectors;
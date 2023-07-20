import React from 'react'
import data from '../../data/data';


const Test = ({ text = "Hello test" }) => {
    return (
        <div>
            <h3>{text}</h3>
            <h3>{data.text}</h3>
        </div>
    );
}

export default Test;
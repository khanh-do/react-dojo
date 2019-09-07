import React from 'react';

import './Square.css';

const Square = (props) => {
    return (
        <div className="square" style={{color:props.color, backgroundColor: props.colorBackground}}>
            <h1>{props.text}</h1>
        </div>
    )
}

export default Square;
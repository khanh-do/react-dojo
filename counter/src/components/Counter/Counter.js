import React from 'react';

import './Counter.css';

const Counter = (props) => {
    return (
        <div className="centered">
            <h1> Hello {props.name}!</h1>
            <button className="btn btn-primary btn-md">Click Me</button>
            <h2>You clicked me XX times</h2>
        </div>
    );
}

export default Counter;
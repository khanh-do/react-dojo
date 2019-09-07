import React from 'react';

const HelloProps = (props) => {
    console.log(props);
    return (
        <div className="jumbotron">
            <h1>Hello {props.title}</h1>
            <p>{props.title} is immutable, or read-only</p>
            <p>{props.description}</p>
        </div>
    )
}

export default HelloProps;
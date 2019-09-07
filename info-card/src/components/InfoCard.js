import React from 'react';

import './InfoCard.css';

const InfoCard = (props) => {
    return (
        <div className="infocard" >
            <img src={props.imgPath} alt="bunny"></img>
            <div className="container">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>            
        </div>
    )
}

export default InfoCard;
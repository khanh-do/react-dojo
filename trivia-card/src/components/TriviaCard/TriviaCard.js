import React from 'react';

import './TriviaCard.css';

class TriviaCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: props.title,
            question: props.question,
            hint: props.hint,
            imgPath: props.imgPath
        }
    }
    render(){
        return (
            <div className="card">
                <img src={require('../../../public/images/' + this.state.imgPath)} alt="baseball"></img>
                <div className="container">
                    <h2>Baseball</h2>
                    <p>{this.state.question}</p>
                </div>
            </div>
        );
    }
}

export default TriviaCard;
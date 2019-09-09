import React from 'react';

import './Counter.css';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            count: 0
        }
    }
    updateCount() {
    	this.setState(prevState => ({
    		count: prevState.count + 1
    	}));
    }

    render() {
        return (
            <div className="centered">
                <h1> Hello {this.props.name}!</h1>
                <button className="btn btn-primary btn-md" 
                    onClick={() => this.updateCount()}>
                    Click Me
                </button>
                {/* To adjust "times" to the singular form for count = 1 at a later date*/}
                <h2>You clicked me {this.state.count} times</h2>        
            </div>
        );
    }
}

export default Counter;
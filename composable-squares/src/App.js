import React from 'react'; 

import Square from './Square';
import './App.css';

const App = (props) => {
    return (
    <div> 
        <Square text="white on blue" color="white" colorBackground="blue" />
        <Square text="blue on red" color="blue" colorBackground="red" />
        <Square text="green on pink" color="green" colorBackground="pink" />   
    </div>);
};

export default App;
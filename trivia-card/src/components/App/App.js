import React from 'react';

import TriviaCard from '../TriviaCard/TriviaCard';
import './App.css';

const App = (props) => {
    return (
        <div className="centered">
            <h2>Click on the Card to Get The Hint!</h2>            
            <TriviaCard 
                title="Baseball"
                question="Who holds the record for most career stolen bases?"
                hint="This player stole a single-season record of 130 bases in 1983 as a member of the Oakland Athletics"
                imgPath="baseball.jpg" 
            />
        </div>
    )
}

export default App;
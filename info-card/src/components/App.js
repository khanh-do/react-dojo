import React from 'react';

import InfoCard from './InfoCard';
import './App.css';

const App = (props) => {
    return (
    <div className="card-group">        
        <InfoCard 
            title="Lionhead Bunny" 
            description="Lionhead is a breed of domestic rabbit recognized by the British Rabbit Council and by the American Rabbit Breeders Association. The Lionhead rabbit has a wool mane encircling the head, reminiscent of a male lion as its name implies." 
            imgPath="./images/lionhead.jpg" 
        />
        <InfoCard 
            title="Daisy Bunny" 
            description="The breed of this particular rabbit is undetermined." 
            imgPath="./images/daisy.jpg" 
        />
        <InfoCard 
            title="Netherland Dwarf" 
            description="The Netherland Dwarf is a breed of domestic rabbit that originated in the Netherlands. Weighing 1.1–2.5 pounds, the Netherland Dwarf is one of the smallest rabbit breeds." 
            imgPath="./images/netherland.jpg" 
        />        
    </div>);
};

export default App;
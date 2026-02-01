import React, { useState } from "react";
import "./App.css";
import lightOnImage from './assets/images/bulbon.gif'
import lightOffImage from './assets/images/bulboff.gif'

function App() {
  const [isOn,setIsOn] = useState(false)

  function toggleBulb(){
    setIsOn(prevIson => !prevIson)
  }
  return (
    <div className="container">
      <img
        src={isOn ? lightOnImage : lightOffImage}
        alt="Light Bulb"
        width="100"
        height="180"
        onClick={toggleBulb}
      />
      <p className="message">
        Click the light bulb to turn the light {isOn ? 'OOF' : 'No'}.
      </p>
    </div>
  );
}

export default App;

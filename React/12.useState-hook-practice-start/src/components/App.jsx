import React from "react";
import "./App.css";
import { useState } from "react";
function App() {
  // let currentTime = new Date().toLocaleTimeString()

  const[time,setTime] =useState("TIME")

  function displayTime(){
    setTime(new Date().toLocaleTimeString())
    setInterval(displayTime,1000)
  }
  
  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={displayTime}>Get Time</button>
    </div>
  );
}

export default App;

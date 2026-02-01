import React from "react";
import "./App.css"
import { useState } from "react";

function App() {
  const [text,setText] = useState('Hello')
  const [isOver, setIsOver] = useState(false)

  let styleObj ={
    backgroundColor : 'White',
    color : 'black'
  }

  function handleClick(){
    setText('submitted')
  }
 function handleMouseOver(){
 setIsOver(true)
 }
 function handleMouseOut(){
 setIsOver(false)
 }
  return (
    <div className="container">
      <h1>{text}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor :isOver? "black":"white"}}
      onClick={handleClick} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Submit</button>
    </div>
  );
}

export default App;

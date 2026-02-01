import React from "react";
import "./App.css"
import { useState } from "react";

function App() {

  const [name,setName] = useState()
  const[nameText,setNameText] = useState('')
  function handleChange(event){
  
    setName(event.target.value)
  }
  function handleClick(){
    setNameText(name)
  }
  return (
    <div className="container">
      <h1>Hello {nameText}</h1>
      <input onChange={handleChange} type="text" placeholder="What's your name?" />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;

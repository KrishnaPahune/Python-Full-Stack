import React, { useRef } from 'react'
import { useState } from 'react'

function App() {
  const [countState,setCountState]= useState(0)
  const countRef =useRef(0)
  let countVar = 0

  console.log("countState=",countState)
  console.log("contRef=",countRef.current)
  console.log("countVar=",countVar)

  

  function incrementCountState(){
    setCountState(prev=> prev + 1)
  }
  
  function incrementCountRef(){
    countRef.current = countRef.current +1
    console.log("countRef=",countRef.current)
  }
  function incrementCountVar(){
        countVar= countVar + 1
    console.log("countVar=",countVar)
   
  }

  return (
    <div>
      <h1> {countState}</h1>
      <button onClick={incrementCountState}>incrementCountState</button>
      <hr />

      <button onClick={incrementCountRef}>incrementCountRef</button>
      <hr />
      <button onClick={incrementCountVar}>incrementCountVar</button>


    </div>
  )
}

export default App
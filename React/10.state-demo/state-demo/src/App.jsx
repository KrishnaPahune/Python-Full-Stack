import "./App.css"
import { useState } from 'react'

function App() {
  const [count,setCount]=useState(0)

  function increment(){
   setCount(count + 1)
  }
  function decrement(){
   setCount(count - 1)
  }
  function reset(){
   setCount(count == 0)
  }
  return (
    <>
    <h1>{count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>decrement</button>
    <button onClick={reset}>reset</button>
    
    
    </>
  )
}

export default App
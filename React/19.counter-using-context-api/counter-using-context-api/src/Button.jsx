import React from 'react'
import { useContext } from 'react'
import { countContext } from './context/CountContext'

function Button() {
    const {setCount}= useContext(countContext)
    function increment(){
        setCount((prevCount) => prevCount + 1)
    }
  return (
    <div>
        <button onClick={increment}>increment</button>
    </div>
  )
}

export default Button
import React, { useEffect, useState } from 'react'

function Message() {
    const [count,setCount] = useState(0)
    function increment(){
        setCount(prev => prev+1)
    }
    useEffect(() => {
        console.log("Message Component is mounted")
        return () => console.log("Message Component is unmounted")
    }, [])
    useEffect(() => {
        console.log("Message Component is updated")
    }, [count])
  return (
    <div>
      <h1>Welcome to React {count}</h1>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Message

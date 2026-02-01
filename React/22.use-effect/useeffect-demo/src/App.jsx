import React, { useState } from 'react'
import Message from './Message'
function App() {
  const [show, setShow] = useState(false)
  function toggle(){
    setShow(prev => !prev)
  }
  return (
    <div>
      <h1>Use Effect Demo</h1>
      <button onClick={toggle}>{show ? "Hide" : "Show"}</button>
      {show ? <Message /> : null}
    </div>
  )
}

export default App
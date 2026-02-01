import React from 'react'
import { useState } from 'react'
import DisplayCount from './DisplayCount'
import { countContext } from './context/CountContext'

function App() {
  const [count, setCount ] = useState(0)
 
   return (
    <div>
      <h1>counter App using contextAPI</h1>
     <countContext.Provider value={{count,setCount}}>
      <DisplayCount />
     </countContext.Provider>
    </div>
  )
}

export default App
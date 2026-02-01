import React, { useState } from 'react'


function App () {
  
  const [numbers, setNumbers] = useState([11,22,33,44])
  function handleClick(){
    setNumbers((prevNumbers) =>{
      return([...prevNumbers,99])
    })
  }
  return (
    <div>
      <button onClick={handleClick}>Add 99</button>
     <ul>
      {numbers.map((n)=>{
        return(
          <li>{n}</li>
        )
      })}
     </ul>
    </div>
    
  )
}

export default App
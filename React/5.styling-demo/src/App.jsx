// import React from 'react'
// // import'./App.css'
// function App() {
//   let obj={
//     color:'red',
//     backgroundColor:'gold',
//     fontSize:'50px'
//   }
//   return (
//     <div>
//       <h1 style={obj}>Hello React</h1>
//     </div>
//   )
// }

// export default App
//////-----------------------------------------/////////////////////////

// import React from 'react'

// function App() {
//   let age =24
//   let result 
//   if(age>=18){
//     result ='Eligibal'
    
//   }else{
//     result ='Not Eligibal'
//   }
//   return (
//     <div>
//       <h1>person is {result} for voting</h1>
//     </div>
//   )
// }

// export default App

//----------------------- using ternary operator---------------////

import React from 'react'

function App() {
  let age = 25
  return (
    <div>
      <h1>person is {age>=18? 'eligibal':'Not Eligibal'}</h1>
    </div>
  )
}

export default App
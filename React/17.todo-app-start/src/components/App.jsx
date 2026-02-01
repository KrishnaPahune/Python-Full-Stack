import React, { useState } from "react";

function App() {
  const[inputText,setInputText]=useState('')
  const[todos,setTodos]=useState([])
  function handleChange(event){
    setInputText(event.target.value)
  }
  console.log(inputText)

  function handleClick(){
    setTodos((prev)=>{
      return([...prev,inputText])
    })
    setInputText("")

  }
  function deleteTodo(id){
    setTodos((prevTodo) => {
      return(
        prevTodo.filter((todo,index)=>{
          return(id !== index)
        }))

    }
  )
  }
  
  
  
  return (
    <>
      <div className='container'>
        <div className='heading'>
          <h1>To-Do App</h1>
        </div>
        <div className='form'>
          <input type='text' onChange={handleChange} value={inputText}/>
          <button onClick={handleClick}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
              {todos.map((todo, index)=>{
                return(
                 <div key={index} style={{display:'flex',justifyContent:'space-between'}}>
                   <li>{todo}</li>
                   <span onClick={()=>{deleteTodo(index)}}>❌</span>
                 </div>
                )
              })}
          </ul>
        </div>
      </div>

      <footer className='footer'>
        <p>© {new Date().getFullYear()} To-Do App | Developed by Mahesh Sale</p>
      </footer>
    </>
  );
}

export default App;

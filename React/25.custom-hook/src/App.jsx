import React, { use } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import useFetch from './useFetch'
function App() {
  const { users } = useFetch('https://jsonplaceholder.typicode.com/users')
  return (
    <div>
      <h1>Custom Hook Demo</h1>
      { users.map((user, index) => {
        return(
          <div key ={index}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
          </div>
        )
      })}
    </div>
  )
}

export default App

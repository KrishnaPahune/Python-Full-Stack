import React, { useEffect, useState } from 'react'
import './App.css'
function App() {
  const [contacts, setContacts] = useState([])
  useEffect(()=>{
      fetch('https://randomuser.me/api/?results=12')
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        setContacts(data.results)
        })
  },[])
  // Guard access — contacts[0] may be undefined before the fetch completes
  // console.log(contacts[0]?.name?.first, contacts[0]?.name?.last)
  return (
    <>
     <h1>Contact app with use effect</h1> 
     <div className="container">
      {contacts.map((contact,index)=>{
        return(
          <div className="contact">
          <img src={contact.picture.large} alt="lkjl" />
          <h2>{contact.name.first} {contact.name.last}</h2>
          <p>{contact.phone}</p>
          <p>{contact.email}</p>
      </div>
        )
      })}
      
      
     </div>
    </>
  )
}

export default App

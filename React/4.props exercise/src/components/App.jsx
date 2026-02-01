import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map((person,index)=>{
        return(
           <Card
           key={index}
           id={index}
           name={person.name}
           imgURL={person.imgURL}
           phone={person.phone}
           email={person.email} 
         
    
    />

        )

      })}
   
    
    </div>
  );
}

export default App;

import { useState } from "react"
export default function App() {
    const[decision,setdecision]=useState(false)
   function toggle(){
    setdecision((prevDecision)=>{
        return(!prevDecision)
    })
   }
    return (
        <main>
            <h1 className="title">Are you going to study tonight?</h1>
            <button className="value" onClick={toggle}>{decision ? 'yes':'No'}</button>
        </main>
    )
}

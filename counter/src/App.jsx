import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setcounter]=useState(10);

  const addvalue=()=>{
    if(counter<20) setcounter(counter+1);
  }
  const removevalue=()=>{
    if(counter>0) setcounter(counter-1);
  }
  

 
  return (
    <>
    
    <h2>the counter value is {counter}</h2>

     <button
     onClick={addvalue}>add counter</button>
     <br />
     <br />
     <button
     onClick={removevalue}>remove counter</button>

    </>
   
  )
}

export default App

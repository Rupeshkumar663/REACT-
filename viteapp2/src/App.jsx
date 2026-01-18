import { useState } from 'react'
import './App.css'
function App() {
 
  let [counter,setcounter]=useState(20)
  //let counter=15;

 const Addvalue=()=>{
  //console.log("value added",Math.random());
  console.log("clicked",counter)
  //counter=counter+1;
  //setcounter(counter+1)//counter=20->21//counter=21->setcounter()
  //setcounter(prevCounter=>prevCounter+1)//counter=21
  //setcounter(prevCounter=>prevCounter+1)//counter=22
  //setcounter(prevCounter=>prevCounter+1)//cpunter=23
  //setcounter(prevCounter=>prevCounter+1)//counter=24
   setcounter(counter+1)
   setcounter(counter+2)
   setcounter(counter+5)
   setcounter(counter+4)
   setcounter(counter+7)

 }

 const removevalue=()=>{
     console.log("clicked",counter)
     //counter=counter-1;
     setcounter(counter-1)
 }
  return (
    <>  <h1>Welcome India</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={Addvalue}>Add value {counter}</button>
      <br/>
      <button onClick={removevalue}>remove value {counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App

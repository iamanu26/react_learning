import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] =  useState(15)

  //let counter = 15

  const addValue = ()=>{
    console.log("clicked" , Math.random() , counter);
    //counter = counter + 1
    if(counter>=20)
    {
      alert("Value cannot be greater then 20")
    } else{
       setCounter(counter+1)
    }

  }

  const removeValue = ()=>{
     if(counter<=0)
    {
      alert("Value cannot be lesser then 0")
    } else{
       setCounter(counter-1)
    }
  }

  return (
    <>
      <h1 >learn it</h1>

      <h2>counter value : {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br />
      <br />
      <button
      onClick={removeValue}
      >remove value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'
import ClickMeCard from './component/ClickMeCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-10'>TailWind Test</h1>
      <ClickMeCard />
      <Card username = "Anurag" btnText="Click me" />
      <Card  username = "Suyash" btnText="visit me" />
    
    </>
  )
}

export default App

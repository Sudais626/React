import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sid from './Sid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <h1 className='bg-green-400 p-4 rounded-xl mb-4'>Tailwind</h1>
  <Sid username="Sudais" btn="Learn more"/>
  <Sid username="Khan" btn="Visit me"/>
  <Sid username="Faisal" btn="sudais"/>
    </>
  )
}

export default App

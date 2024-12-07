import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

/* we can pass values from one component to another, by using props in that fnc.*/
function App() {
  const [count, setCount] = useState(0)
  // let myObj = {
  //   username: "sudais",
  //   age:21
  // }
  // let newArr = [1 , 2, 3, 4]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'  >Tailwind test</h1>
    
    {/* <Card channel="Sudais Khan" someobj = {newArr}/> */}

    <Card username="sudais" btnText="click me"/>
    <Card username="khan" btnText="visit me"/>
    </>
  )
}

export default App

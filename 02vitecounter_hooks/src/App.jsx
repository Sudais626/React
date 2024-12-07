import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*hooks are responsible for change in state.
counter is a variable, setCounter is a method 
or fnc which will control the counter.
*/
function App() {
//hook
  let [counter, setCounter] = useState(10)

  // let Counter = 10;

  const incVal = () =>{
    // counter =  counter + 1
    if(counter<20){
      
      setCounter(counter + 1)
      /*setCounter(counter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)
       it will create a batch , all r updating the same counter
      . repeating same work
      */
     /* (prev counter(last updated state)) this fnc accepts a callback
     , complete hone k bad call hota last*/
    //  setCounter(prevCounter => prevCounter + 1)
    //  setCounter(prevCounter => prevCounter + 1)
    //  setCounter(prevCounter => prevCounter + 1)
    //  setCounter(prevCounter => prevCounter + 1)
    }
  }

  const decVal = () =>{
    if(counter>0){

      setCounter(counter - 1)
    }
    
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value : {counter}</h2>

    <button onClick={incVal} >Increase value : {counter}</button>
    <br />
    <button onClick={decVal}>Decrease value : {counter}</button>
  
    </>
  )
}

export default App

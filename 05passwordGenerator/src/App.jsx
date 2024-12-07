import { useState, useCallback, useEffect, useRef } from 'react'

//useCallback(memorize a fnc) is a react hook that lets u cache a fnc definition b/w re-renders. (optimizing the methods([length, numberallowed etc])) (storig in cache)
//useEffect is a hook that lets u synchronize a component with an external systems. (if there's a change in methods run it again) (for running), (when page is loaded it calls)
//useRef jab kisi cheez ka refernce lena hota hai
function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const[password, setPassword] = useState("")

// using useref hook
const passwordRef = useRef(null)


// using useCallback
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    // if(numberAllowed){
    //   str += "012345689"
    // }
    // below is a short method
    if (numberAllowed) str += "012345689"
    if(charAllowed) str+= "!@{}$%£&*#()_-+=~''"
    //forloop , making a random password gen
    for(let i = 1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }
    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() =>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  }, [password])
  // using useEffect
  useEffect(() => {
    passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
   {/* <h1 className='text-4xl text-center text-white'>Password Generator</h1> */}
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
    <h1 className='text-white text-center my-1 py-4 '>Password Generator</h1>
   <div className="flex shadow rounded-lg overflow-hidden mb-4">

    <input type="text" value={password} className="outline-none rounded-xl  w-full py-1 px-3"
     placeholder='Password' readOnly ref={passwordRef}

    />
    <button 
    onClick={copyPasswordToClipboard}
    className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
    
   </div>
   <div className='flex text-sm gap-x-2'>
   <div className='flex items-center gap-x-1'>
    <input type="range" min={6} max={100} value={length} className='cursor-pointer' 
    onChange={(e)=> {setLength(e.target.value)}}
    />

    <label htmlFor="">Lenght: {length}</label>
   </div>

   <div className='flex items-center gap-x-1'>
    <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' 
    onChange={() => {setNumberAllowed((prev) => !prev)}}
    />
    <label htmlFor="numberInput">Numbers</label>
   </div>

    <div className='flex items-center gap-x-1'>
      <input type="checkbox"  id="characterInput"
      onChange={() =>{setCharAllowed((prev) => !prev)}}
      />
      <label htmlFor="characterInput">Characters</label>
    </div>

   </div>

   </div>
    </>
  )
}

export default App



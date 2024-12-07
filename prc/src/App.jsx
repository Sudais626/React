import { useCallback, useEffect, useState , useRef } from 'react'


function App() {
  const[password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    for(let i = 1; i<=8; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [setPassword])

  const copyPasswordToClipboard = useCallback(() =>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator])

  return (
    <>
  <div className='bg-gray-600 w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-yellow-600'>
  <h1 className='my-1 py-4 text-center text-white'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type="text" placeholder='Password' value={password} className='outline-none rounded-xl  w-full py-1 px-3' 
      readOnly />
      <button  onClick={copyPasswordToClipboard} ref={passwordRef}
    className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
    </div>
  </div>
    </>
  )
}

export default App

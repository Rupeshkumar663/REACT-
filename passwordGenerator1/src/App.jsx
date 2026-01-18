
import { useState,useCallback,useEffect, useRef} from 'react'

function App() {
  const [length,setLength]=useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false)
  const [charAllowed,setcharAllowed]=useState(false)
  const [password,setPassword]=useState("")
  
  //useref Hook------------------------------------------
  const passwordref=useRef(null)
  const passwordGenereator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str+="0123456789";
    }
    if(charAllowed){
       str+="!@#$%^&*_+[]{}~`=";
    }

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);
    }
   setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard=useCallback(()=>{
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0,100);
    if (window?.navigator?.clipboard) {
      window.navigator.clipboard.writeText(password)
    }
  },[password])

  useEffect(()=>{
    passwordGenereator()
  },[length,numberAllowed,charAllowed,passwordGenereator])
  return (

      <div className='w-1/2 max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800  text-orange-500'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
             <input type="text"
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='password'
              readOnly
              ref={passwordref}
             />
             <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'onClick={copyPasswordToClipboard}>copy</button>

        </div>

        <div className='flex text-sm gap-x-2'> 
           <div className='flex items-center gap-x-1'>
            <input type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
           </div>
           <div className='flex items-center gap-x-1'>
             <input
              type="checkbox" 
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={()=>{
                setNumberAllowed((prev)=>!prev);
              }}
             />
             <label htmlFor='numberInput'>Numbers</label>
           </div>
           <div className='flex items-center gap-x-1'>
             <input
              type="checkbox" 
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={()=>{
                setcharAllowed((prev)=>!prev);
              }}
             />
             <label htmlFor='characterInput'>Characters</label>
           </div>
        </div>
      </div>

  )
}

export default App

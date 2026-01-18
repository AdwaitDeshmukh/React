import { useState,useCallback,useEffect, useRef, use } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [lenght, setlenght] = useState(8);
  const [numallow,setnumallow] = useState(true);
  const [charallow,setcharallow] = useState(true);
  const [pass,setpass] = useState('');
  
const passref=useRef(null);


  const passgen=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numallow){
      str+="0123456789";
    }
    if(charallow){
      str+="!@#$%^&*()_+";
    }

    for(let i=0;i<lenght;i++){
      let char=Math.random()*str.length;
      char=Math.floor(char);
      pass+=str[char];
    }
    setpass(pass);


  }
    ,[lenght,numallow,charallow,setpass])

  const copypass=()=>{
    passref.current?.select();
    window.navigator.clipboard.writeText(pass)
    // alert('password copied');
  }

    useEffect(()=>{passgen()},[lenght,numallow,charallow,setpass])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-white bg-gray-700'>
      <h1>Password Generator</h1>
      <div className='flex shadow rounded-lg mb-4 bg-gray-300 '>
        <input type="text" value={pass} placeholder='password' readOnly ref={passref} className='text-black placeholder:text-gray px-3 w-full'></input>
        <button className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0' onClick={copypass}>copy</button>
      </div>
      
      <div>
        <input type='range' className='range' min={6} max={22} defaultValue={8} onChange={(e)=>{setlenght(e.target.value)}}></input>
        <label className='range px-3'>Length: {lenght}</label>
        <input type='checkbox' defaultChecked={numallow} onChange={(e)=>{setnumallow(e.target.checked)}}></input>
        <label className='pr-3 pb'>Numbers</label>
        <input type='checkbox' defaultChecked={charallow} onChange={(e)=>{setcharallow(e.target.checked)}}></input>
        <label>Characters</label>
        
      </div>
    </div>
    </>
  )
}

export default App

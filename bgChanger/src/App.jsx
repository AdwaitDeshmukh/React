import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [color,setColor] = useState("orange")

  return (
    <div className='w-full h-screen m-0 p-0' style={{backgroundColor:color}}>
      <div className='fixed flex  justify-center bottom-12 inset-x-0 px-2' >
        <div className='flex flexwrap justify-center gap-3 shadow-lg bg-white px-3 py-5 rounded-3xl'>
          <button onClick={()=>setColor("red")} className='px-4 py-2 rounded-md' style={{backgroundColor:'red',color:'white'}}>Red</button>
          <button onClick={()=>setColor("orange")} className='px-4 py-2 rounded-md' style={{backgroundColor:'orange',color:'white'}}>orange</button>
          <button onClick={()=>setColor("green")}  className='px-4 py-2 rounded-md' style={{backgroundColor:'green',color:'white'}}>Green</button>
          <button onClick={()=>setColor("blue")} className='px-4 py-2 rounded-md' style={{backgroundColor:'blue',color:'white'}}>Blue</button>          
        </div>
      </div>
    </div>
  )
}

export default App

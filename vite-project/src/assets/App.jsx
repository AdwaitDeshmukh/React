import { useState } from "react";

function App() {
  let [counter,setcounter]=useState(0);
  return (
    <div>
    <h1>Counter</h1>
    <h2>Value:{counter}</h2>
    <button onClick={()=>setcounter(counter+1)}>add val</button>
    <br/>
    <button onClick={()=>setcounter(counter-1)}>sub val</button>
    </div>
  )
}

export default App

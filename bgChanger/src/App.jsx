import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("olive")
  const [tcolor, setTcolor] = useState("white")

  return (
    <div className="w-full h-screen duration-200" style={{background: color}}>
      <div className='flex justify-center items-center h-full text-xl' style={{color: tcolor}}>
        The color is now {color}
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
          <button onClick={() => {setColor("red"); setTcolor("yellow")}} className='outline-none rounded-full px-3 py-1 shadow-lg' style={{backgroundColor:"red"}}>
            Red
          </button>
          <button onClick={() => {setColor("green"); setTcolor("magenta")}} className='outline-none rounded-full px-3 py-1 shadow-lg text-white' style={{backgroundColor:"green"}}>
            Green
          </button>
          <button onClick={() => {setColor("blue"); setTcolor("orange")}} className='outline-none rounded-full px-3 py-1 shadow-lg text-white' style={{backgroundColor:"blue"}}>
            Blue
          </button>
          <button onClick={() => {setColor("crimson"); setTcolor("black")}} className='outline-none rounded-full px-3 py-1 shadow-lg text-white' style={{backgroundColor:"crimson"}}>
            Crimson
          </button>
          <button onClick={() => {setColor("black"); setTcolor("white")}} className='outline-none rounded-full px-3 py-1 shadow-lg text-white' style={{backgroundColor:"black"}}>
            Black
          </button>
        </div>
        </div>
    </div>
  )
}

export default App

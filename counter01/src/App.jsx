import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const increase = () => {
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
    setCount(prevCount => prevCount + 1)
  }

  const decrease = () => {
    setCount(count - 1)
    setCount(count - 1)
    setCount(count - 1)
    setCount(count - 1)
  }

  return (
    <>
      <h1>Javascript Testing</h1>
      <br />
      <div>
        Current count {count}
      </div>
      <div>
        <button onClick={increase}>click to increase</button>
        <button onClick={decrease}>click to decrease</button>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //const counter = '5'
  //let counter = 5

  let [counter, setcounter] = useState(0)
  const addvalue = () => {
    console.log('value added', counter)
    setcounter(counter + 1)
  }

  const removevalue = () => {
    console.log('value removed', counter)
    setcounter(counter - 1)
  }

  return (
    <>
      <h1>
        hola amigo
      </h1>
      <h2>Current count {counter}</h2>
      <button onClick={addvalue}>increase value</button>
      <br />
      <button onClick={removevalue}>decrease value</button>
    </>
  )
}

export default App

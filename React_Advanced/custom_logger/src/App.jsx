import {useState} from "react"
import './App.css'
import { useLogger } from "./UseLogger"

function App() {
  const  [counter , setCounter] = useState(0)
  useLogger(counter)
  return (
    <>
    <h1>Counter {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter -1)}>Decrement</button>
    </>
  )
}

export default App

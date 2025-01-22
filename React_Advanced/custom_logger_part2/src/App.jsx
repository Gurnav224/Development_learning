import './App.css'
import { useLogger , useCounter } from "./useCounter"

function App() {
  
  
 

  const {counter,increment,decrement} = useCounter(10);

  useLogger(counter)

  return (
    <>
    <h1>Counter {counter}</h1>
      <button onClick={increment }>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default App

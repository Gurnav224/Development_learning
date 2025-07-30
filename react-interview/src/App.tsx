
import { useReducer } from 'react'
import './App.css'

interface StateType{
  counter:number
}

interface ActionType {
  type:"INCRMENT"|"DECREMENT" | "RESET"
}

function reducer(state:StateType,action:ActionType){
  switch(action.type){
    case 'DECREMENT':
      return {
        ...state,
        counter:state.counter - 1
      }
    case 'INCRMENT':
      return {
        ...state,
        counter:state.counter + 1
      }
    case 'RESET':
      return {
        counter:0
      }
    default:
      return state
  }
}

const initialState = {
  counter:0
}



function App() {
 const [state, dispatch] = useReducer(reducer , initialState)


 const handleIncrment = () => {
dispatch({type:'INCRMENT'})
}

const handleDecrment = () => {
  dispatch({type:'DECREMENT'})
}


const handleReset = () => {
  dispatch({type:"RESET"})
}
  return (
    <>
      <h1>Hello Counter {state.counter}</h1>
      <button onClick={handleIncrment}>Increment</button>
      <button onClick={handleDecrment}>Decrment</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default App

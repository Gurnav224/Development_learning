
import './App.css';
import {useDispatch, useSelector} from "react-redux"

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch()
  const handleClick = (type) => {
    dispatch({type})
  }
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={() => handleClick("add")}>add</button>
      <button onClick={() => handleClick("minus")}>minus</button>
    </>
  )
}

export default App

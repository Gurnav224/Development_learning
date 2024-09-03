import { useState } from 'react'
import './App.css'
import useFetch from './useFetch'

function App() {

  const [showData , setShowData] = useState(false)
  const {data} = useFetch('https://jsonplaceholder.typicode.com/todos/1')

  return (
    <>
      <h1>Todo API</h1>
      <button onClick={()=> setShowData(true)}>Get todo</button>

      {
        showData && (
          <div>
            {
              data ? (
                <p>{JSON.stringify(data)}</p>
              ):(
                <p>An error occured whilte fetching todo</p>
              )
            }
          </div>
        )
      }
    </>
  )
}

export default App

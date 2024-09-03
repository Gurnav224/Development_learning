import { useState } from 'react'
import './App.css'
import useFetch from './useFetch'

function App() {
const [showData , setShowData] = useState(false)
 const {data} = useFetch('https://v2.jokeapi.dev/joke/Programming?type=single' , {});

 console.log(data)

  return (
    <>
   <h1>Progamming API</h1>
   <button onClick={()=>setShowData(true)}>Get Programming Joke</button>
   {
    showData && (
      <div>
        {
          data ? (
            <p>{data.joke}</p>
          ):(
            <p>An error occured getting programming joke</p>
          )
        }
      </div>
    )
   }
    </>
  )
}

export default App

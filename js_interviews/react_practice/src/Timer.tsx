import { useState } from "react"

const Timer = () => {
   const [time , setTime] = useState<number>(0);
   const [timeInterval , setTimeInterval] = useState<number>();

   const start = () => {

     setTimeInterval(setInterval(() => {
      setTime((prev) => prev + 1)
    },1000))
   }

   const stop = () => {
    clearInterval(timeInterval)
   }

   const reset = () => {
    setTime(0)
    clearInterval(timeInterval)
   }

  return (
    <>
      <h1>Timer </h1>
       <h2>{time}</h2>
       <button onClick={start}>START</button>
        <button onClick={stop}>Stop</button>
       <button onClick={reset}>RESET</button>
    </>
  )
}

export default Timer

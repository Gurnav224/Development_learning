import { useState } from "react"

export const useCounter = (init) => {
    const [counter , setCounter] = useState(init);

    function increment(){
        setCounter(counter + 1)
    }

    function decrement(){
        setCounter(counter -1)
    }

    function reset(){
        setCounter(0)
    }

    return {counter, increment,decrement,reset}
}
import { useState } from "react";

export const useLogger = (counter) => {
    console.log('logger',counter)
}

export  function useCounter(init){
    const [counter , setCounter] = useState(init);

    function increment(){
      setCounter(counter + 1)
    }
    function decrement(){
      setCounter(counter -1)
    }

    return {counter, increment,decrement}
  }
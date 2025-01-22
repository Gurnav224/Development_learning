import { useEffect } from "react";
import { useState } from "react";

 function useLocalStroage(key, initial) {
  const [value, setValue] = useState(() => {

    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initial
  });

 


  useEffect(() => {
   
        localStorage.setItem(key, JSON.stringify(value))
  }, [key, value]);




  return { value, setValue };
}


export default useLocalStroage
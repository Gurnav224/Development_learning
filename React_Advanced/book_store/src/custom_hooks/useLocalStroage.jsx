import { useEffect, useState } from "react"



const useLocalStroage = (key, initialValue) => {


    const [value, setValue] = useState(initialValue || JSON.parse(localStorage.getItem(key)) );



    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(value))
    },[key,value ])


    return { value, setValue}

}


export default useLocalStroage;
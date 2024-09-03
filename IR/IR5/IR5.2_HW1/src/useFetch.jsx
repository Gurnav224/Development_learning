import { useEffect } from "react";
import { useState } from "react"

const useFetch = (url, initalData)  => {
    const [data , setData] = useState(initalData);

    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then((data)=>setData(data))
        .catch((error)=>console.error(error))
    },[url])

    return {data}
}

export default useFetch

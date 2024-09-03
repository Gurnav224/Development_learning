import { useEffect, useState } from "react"




const useFetch = (url , initialData) => {

    const [data , setData] = useState(initialData)

    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data) => setData(data))
        .catch((error) => console.error(error))
    },[url])

    return {data}
}



export default useFetch
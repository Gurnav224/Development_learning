import { useEffect, useState } from "react"

const useFetch = (url, initialData) => {
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const [data , setData] = useState(initialData);


    useEffect(()=>{
        setLoading(true)
        fetch(url)
        .then((res)=> res.json())
        .then((data) => setData(data))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    },[url])


  return  {data , error, loading}
}

export default useFetch

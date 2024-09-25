import { useEffect } from "react";
import { useState } from "react"




const useFetch = (url, initialData) => {
    const [data , setData] = useState(initialData);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);


    useEffect(()=>{
        setLoading(true)
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    },[url])

  return {data , error, loading}
}

export default useFetch

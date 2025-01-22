import { useEffect } from "react";
import { useState } from "react";



export default function useFetch (url, initialData) {
 const [data , setData] = useState(initialData);
 const [error , setError] = useState(null);
 const [loading, setLoading] = useState(false);


 useEffect(() => {
  const fetchData = async () => {
    setLoading(true)
    try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data)
    } catch (error) {
        setError(error)
    }
    finally{
        setLoading(false)
    }
  }

  fetchData()
 },[url])


 return {data, error, loading}
}

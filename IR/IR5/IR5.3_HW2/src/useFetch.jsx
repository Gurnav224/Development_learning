import { useState } from "react";
import { useEffect } from "react";

const useFetch = (url , initialData)=>{
const [loading , setLoading] = useState(false);
const [error , setError] = useState('');
const [data , setData] = useState(initialData)



useEffect(()=>{
setLoading(true)
 fetch(url)
 .then((res) => res.json())
 .then((data) => setData(data))
 .catch((error)=> setError(error))
 .finally(()=> setLoading(false))
},[url])


return {data , loading , error}

}

export default useFetch;
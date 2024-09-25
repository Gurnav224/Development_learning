import { useEffect , useState } from "react";


const useFetch = (url, initialData) => {

    const [data , setData] = useState(initialData);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null)


    useEffect(()=>{
        setLoading(true)
        fetch(url)
        .then((res) => res.json())
        .then((books) => {
            setData(books)
        })
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false))
    },[url])


  return {data , error , loading}
}

export default useFetch

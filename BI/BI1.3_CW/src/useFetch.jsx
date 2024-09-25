import { useEffect, useState } from "react"


const useFetch = (url, initialData) => {
  const [data , setData] = useState(initialData);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);



  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [url]);

  return {data , loading, error}

}

export default useFetch

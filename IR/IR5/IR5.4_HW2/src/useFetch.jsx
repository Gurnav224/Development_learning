
import { useState }  from "react"


const useFetch = (url) => {
  const [data , setData] = useState(null);
  const [error , setError] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchData = () =>{
    setLoading(true)
      fetch(url)
      .then((response) => {
        if(!response.ok){
          throw new Error("network response was not ok");
          
        }
        return response.json()
      })
      .then((data) => {
        setData(data)
      }).catch((error) => {
        setError('an error occured while getting user data from api')
      })
      .finally(()=>{
        setLoading(false)
      })
  }

  return {data , error , loading , fetchData}
}

export default useFetch

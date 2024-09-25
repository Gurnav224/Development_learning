import { useState } from "react";
import useFetch from "../useFetch"

const Movies = () => {
    const {data, loading, error} = useFetch('https://movies-backend-mocha.vercel.app/movies',[]);

 

    const [successMessage, setSuccessMessage] = useState("")


    const deleteMovie = async (movieId)=>{



      try {
        const response = await fetch(`https://movies-backend-mocha.vercel.app/movies/${movieId}`,{
          method:'DELETE'
        });

        if(!response.ok) {
          throw Error('failed to delete the movie')
        }

        const data = await response.json();

        if(data){
          setSuccessMessage("Movie deleted Successfully")

        
          window.location.reload()

        }

      } catch (error) {
        console.error("error to deleting movie",error)
      }

    }
    

    if (error) return <p>error {error}</p>

  return data ? (
    <div>
        <ul>
        {
        data?.movies?.map((movie)=> (
            <li key={movie._id}>
            {movie.title}
            {" "}
            <button onClick={() => deleteMovie(movie._id)}>Delete</button>
            </li>
        ))
        }
        </ul>
        { successMessage && <p>{successMessage}</p>}
    </div>
  ):(
    loading && <p>{loading}</p>
  )
}

export default Movies

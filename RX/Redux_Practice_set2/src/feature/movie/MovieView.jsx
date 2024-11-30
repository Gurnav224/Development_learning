import { useDispatch, useSelector } from "react-redux";
import MovieList from "./MovieList";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { deleteMovieAsync, fetchMovies } from "./movieSlice";

const MovieView = () => {
    const {movies , status, error} = useSelector((state) => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies())
    },[dispatch])
  
    const handleDeleteMovie = (movieId)=> {
        dispatch(deleteMovieAsync(movieId))
    }

  return (
    <div className="container my-3">
       <div className="my-4">
        <h1 className="my-3">Add Movie</h1>
        <Link className="btn btn-warning" to="/add_movie">Add Movie</Link>
       </div>
       <div>
      <h1 className="my-2">Movies List</h1>

{
status === "loading" && <p>Loading Movie......</p>
}
      
       {
       error && <p>{error.message}</p>
       }
      <MovieList movies={movies} handleDeleteMovie={handleDeleteMovie} status = {status}/>
       </div>
    </div>
  )
}

export default MovieView

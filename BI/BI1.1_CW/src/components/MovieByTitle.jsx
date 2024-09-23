import useFetch from "../useFetch"

const MovieByTitle = () => {

    const {data , loading, error} = useFetch('https://movies-backend-reir.onrender.com/movies/Gully%20Boy')


    const movie = data?.movie;

    if(error) return <p>error : {error}</p>

  return movie ? (
    <div>
        <h2>{movie.title}</h2>
        <p>{movie.director}</p>
        <p>{movie.country}</p>
        <p>{movie.releaseYear}</p>
        <p>{movie.rating}</p>
        <p>{movie.actors.join(", ")}</p>
        <p>{movie.awards}</p>
        <p>{movie.plot}</p>
        <img src={movie.posterUrl} alt="Poster Image" />
    </div>
  ):(
    loading && <p>loading.............</p>
  )
}

export default MovieByTitle

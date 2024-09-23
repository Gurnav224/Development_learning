import useFetch from "../useFetch"

const Movies = () => {
    const {data, loading, error} = useFetch('https://movies-backend-reir.onrender.com/movies',[]);

  return (
    <div>
        <ul>
        {
        data?.movies?.map((movie)=> (
            <li key={movie._id}>
            {movie.title}
            </li>
        ))
        }
        </ul>
    </div>
  )
}

export default Movies

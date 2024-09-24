import useFetch from "../useFetch"

const Movies = () => {
    const {data, loading, error} = useFetch('https://movies-backend-mocha.vercel.app/movies',[]);

    if (error) return <p>error {error}</p>

  return data ? (
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
  ):(
    loading && <p>{loading}</p>
  )
}

export default Movies

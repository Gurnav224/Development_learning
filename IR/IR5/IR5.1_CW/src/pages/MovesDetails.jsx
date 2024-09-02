import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { movies } from "./Movies"

const MoviesDetails = () => {

    const {id} = useParams();

    const movie = movies.find((movie) => movie.id == id)

  return (
    <>
      <Header/>
      <main className="container my-4">
      <h1 className=" my-2">Movie  Details </h1>
      <div className="card my-3">
        <div className="card-header">
            <h3>{movie.title}</h3>
        </div>
        <div className="card-body">
            <h5>Title: {movie.title}</h5>
            <p>Genre: {movie.genre}</p>
            <p>Director: {movie.director}</p>
        </div>
      </div>
      </main>
      <Footer/>
    </>
  )
}

export default MoviesDetails

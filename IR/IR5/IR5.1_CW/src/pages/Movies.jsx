import { useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { Link } from "react-router-dom"


export const movies = [
    {
        "id":1,
      "title": "Inception",
      "genre": "Science Fiction",
      "director": "Christopher Nolan",
      "views" : 2000,
      "rating" : 7
    },
    {
        "id":2,
      "title": "The Godfather",
      "genre": "Crime",
      "director": "Francis Ford Coppola",
      "views" : 1000,
        "rating":7.8
    },
    {
        "id":3,
      "title": "The Dark Knight",
      "genre": "Action",
      "director": "Christopher Nolan",
      "views" : 5000,
      "rating":9
    },
    {
        "id":4,
      "title": "Pulp Fiction",
      "genre": "Crime",
      "director": "Quentin Tarantino",
      "views" : 4000,
      "rating" : 6.8
    },
   
    { "id":5,
      "title": "The Shawshank Redemption",
      "genre": "Drama",
      "director": "Frank Darabont",
      "views":2000,
      "rating":8
    },
  
  ]
  

const Movies = () => {

    const [genre , setGenre] = useState('All')


    const filterMovies = genre === 'All' ? movies : movies.filter((movie)=> movie.genre === genre)


  return (
    <>
     <Header/>
     <main className="container my-4">
     <h1 className=" my-2">List of Movies </h1>
     <div className="form-group">
        <label className="form-label" htmlFor="genre">Filter By Genre: </label>
        <select name="genre" id="genre" className="form-select mb-4" onChange={(event) => setGenre(event.target.value)}>
            <option value="All" selected>All</option>
            <option value="Action">Action</option>
            <option value="Crime">Crime</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Drama">Drama</option>
        </select>
     </div>
      <ul className="list-group">
        {
            filterMovies.map((movie)=>(
                <li key={movie.id} className="list-group-item py-3">
                    <h4>Title: {movie.title}</h4>
                    <p>Genre: {movie.genre}</p>
                    <p>Director: {movie.director}</p>
                    <Link to={`/movies/${movie.id}`} className="btn btn-primary">View Details</Link>
                </li>
            ))
        }
      </ul>
     </main>
     <Footer/> 
    </>
  )
}

export default Movies

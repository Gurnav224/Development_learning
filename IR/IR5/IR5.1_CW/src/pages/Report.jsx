import Footer from "../components/Footer"
import Header from "../components/Header"
import { movies } from "./Movies"

const Report = () => {
    const mostWatchMovie = movies.reduce((watchTime, currentMovie) => watchTime.views > currentMovie.views ? watchTime : currentMovie , 0);

    const highestRatedMovie = movies.reduce((highRating, currentMovie)=> highRating.rating > currentMovie.rating ? highRating : currentMovie);

    const totalNoOfMovies = movies.length;

  return (
    <>
     <Header/>
     <main className="container">
     <h1 className="my-2">Movie Report</h1>
     <hr />
     <div className="row">
       <div className="col-md-4 mb-3">
        <h2>Most watched Movie</h2>
        <p>Title: {mostWatchMovie.title}</p>
        <p>Views: {mostWatchMovie.views}</p>
       </div>
       <div className="col-md-4 mb-3">
        <h2>Highest Rated Movie</h2>
        <p>Ttile: {highestRatedMovie.title}</p>
        <p>Rating: {highestRatedMovie.rating}</p>
       </div>
       <div className="col-md-4 mb-3">
        <h2>Total Number Movies</h2>
        <p>Total Movies: {totalNoOfMovies}</p>
       </div>
     </div>
     </main>
     <Footer/> 
    </>
  )
}

export default Report

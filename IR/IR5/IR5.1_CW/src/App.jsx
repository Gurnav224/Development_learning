import Footer from "./components/Footer"
import Header from "./components/Header"
import { Link } from "react-router-dom"

function App() {

  return (
    <>
     <Header/>
     <main className="container my-4">
      <div className="py-4">
      <img src="https://placehold.co/600x400?text=Movies + Cover" alt="" />

      </div>
      <div className="py-4">
        <h2>Our Movies</h2>
        <p>Explore our collection of movies spanning various genres and themes</p>
        <Link className="btn btn-primary" to={'/movies'}>View Movies</Link>
      </div>

      <div className="py-4">
        <h2>Movie Recommendations</h2>
        <p>check out our curated list of recommended movies that you might enjoy</p>
        <Link className="btn btn-primary" to={'/report'}>View Reommendations</Link>
      </div>
     </main>
     <Footer/>
    </>
  )
}

export default App

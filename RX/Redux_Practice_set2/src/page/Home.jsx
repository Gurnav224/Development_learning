import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="container my-4">
            <div className="text-center my-4">
                <h2 className="my-3">check my catalog movies</h2>
                    <Link to="/movies" className="btn btn-primary">View Movies</Link>
            </div>
            <div className="text-center my-4">
                <h2 className="my-3">Add new movies to database</h2>
                    <Link to="/add_movie" className="btn btn-primary">Add Movie</Link>
            </div>
    </section>
  )
}

export default Home

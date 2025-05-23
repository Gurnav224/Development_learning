import { Link } from "react-router-dom"



const Home = () => {
  return (
    <section className="container my-4">
        <div className="text-center my-4">
            <h2 className="my-4">Book List</h2>
                <Link className="btn btn-primary" to="/books">View Book</Link>
        </div>
        <div className="text-center my-4">
            <h2 className="my-4">Add Book</h2>
                <Link className="btn btn-primary" to="/add_books">Add Book</Link>
        </div>
    </section>
  )
}

export default Home

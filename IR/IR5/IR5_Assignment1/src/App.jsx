import Footer from "./components/Footer"
import Header from "./components/Header"
import { Link } from "react-router-dom"




function App() {

  return (
    <>
     <Header/>
     <main className="container my-4">
      <div className="py-4">
      <img src="https://placehold.co/600x400?text=Players + Smiling" alt="img" />

      </div>
      <div className="py-4">
        <h2>Our Players</h2>
        <p>Meet our talented team of players who work hard to achieve success on the field</p>
        <Link className="btn btn-primary" to={'/players'}>View Players</Link>
      </div>

      <div className="py-4">
        <h2>Team Performance</h2>
        <p>Explore our team's  Performance statistics to gain insights into our success on the field </p>
        <Link className="btn btn-primary" to={'/report'}>View Performance</Link>
      </div>
     </main>
     <Footer/>
    </>
  )
}

export default App

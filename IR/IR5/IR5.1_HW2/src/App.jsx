import Footer from "./components/Footer"
import Header from "./components/Header"
import { Link } from "react-router-dom"




function App() {

  return (
    <>
     <Header/>
     <main className="container my-4">
      <div className="py-4">
      <img src="https://placehold.co/600x400?text=Healthy + Lifestyle" alt="img" />

      </div>
      <div className="py-4">
        <h2>Health Resource</h2>
        <p>Discover food and information to support your journey toawards a  Healthier Lifestyle</p>
        <Link className="btn btn-primary" to={'/foods'}>Explore Food Items</Link>
      </div>

      <div className="py-4">
        <h2>Company Report</h2>
        <p>See Health Report</p>
        <Link className="btn btn-primary" to={'/report'}>View Report</Link>
      </div>
     </main>
     <Footer/>
    </>
  )
}

export default App

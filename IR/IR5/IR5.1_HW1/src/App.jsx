import Footer from "./components/Footer"
import Header from "./components/Header"
import { Link } from "react-router-dom"

function App() {

  return (
    <>
     <Header/>
     <main className="container my-4">
      <div className="py-4">
      <img src="https://placehold.co/600x400?text=Employees + Smiling" alt="" />

      </div>
      <div className="py-4">
        <h2>Our Employees</h2>
        <p>Meet Our dedicated team of professionals who work tirelessly to achieve our Company's goals.</p>
        <Link className="btn btn-primary" to={'/employees'}>View Employees</Link>
      </div>

      <div className="py-4">
        <h2>Company Report</h2>
        <p>Explore our latest finacial report to gain insights into our Company's performance and growth</p>
        <Link className="btn btn-primary" to={'/report'}>View Report</Link>
      </div>
     </main>
     <Footer/>
    </>
  )
}

export default App

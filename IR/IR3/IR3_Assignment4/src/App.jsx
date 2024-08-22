import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import { Link } from "react-router-dom"

function App() {

  return (
    <>
    <Header/>
    <main className="container py-4">
        <section className="text-center">
            <img src="https://images.unsplash.com/photo-1598791318878-10e76d178023?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="todos img" className="img-fluid w-50 rounded"/>
        </section>

        <section className="text-center">
              <h2>Todos</h2>
              <p>Welcome to the todo application</p>
              <Link className="btn btn-primary" to="/todos">View Todos</Link>
        </section>
    </main>
    <Footer/>
     
    </>
  )
}

export default App

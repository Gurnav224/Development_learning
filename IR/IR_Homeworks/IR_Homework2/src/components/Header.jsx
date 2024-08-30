
import {Link} from "react-router-dom"


const Header = () => {
  return (
    <header className="bg-dark text-light py-4">
        <nav>
    <div className="container">
    <h1 className="display-3">Virat Kohli</h1>
     <ul className="nav">
        <li className="nav-item">
        <Link to="/" className="nav-link">Overview</Link>
        </li>
        <li className="nav-item">
            <Link to="/biograhpy" className="nav-link">Biography</Link>
        </li>
        <li className="nav-item">
            <Link to="/records" className="nav-link">Records</Link>
        </li>
     </ul>
    </div>
        </nav>
    </header>
  )
}

export default Header

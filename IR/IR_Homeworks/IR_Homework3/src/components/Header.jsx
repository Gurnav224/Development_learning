
import {Link} from "react-router-dom"


const Header = () => {
  return (
    <header className="bg-dark text-light py-4">
        <nav>
    <div className="container">
    <h1 className="display-3">iPhone 15 </h1>
     <ul className="nav">
        <li className="nav-item">
        <Link to="/" className="nav-link">Overview</Link>
        </li>
        <li className="nav-item">
            <Link to="/features" className="nav-link">Features</Link>
        </li>
        <li className="nav-item">
            <Link to="/specifications" className="nav-link">Specifications</Link>
        </li>
     </ul>
    </div>
        </nav>
    </header>
  )
}

export default Header

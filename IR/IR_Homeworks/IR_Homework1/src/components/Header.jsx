
import {Link} from "react-router-dom"


const Header = () => {
  return (
    <header className="bg-dark text-light py-4">
        <nav>
    <div className="container">
    <h1 className="display-3">Taj Mahal</h1>
     <ul className="nav">
        <li className="nav-item">
        <Link to="/" className="nav-link">Overview</Link>
        </li>
        <li className="nav-item">
            <Link to="/history" className="nav-link">History</Link>
        </li>
        <li className="nav-item">
            <Link to="/architecture" className="nav-link">Architecture</Link>
        </li>
     </ul>
    </div>
        </nav>
    </header>
  )
}

export default Header

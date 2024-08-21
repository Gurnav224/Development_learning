import {NavLink} from "react-router-dom"


const Header = () => {
  return (
    <header className="bg-dark text-light py-4">
    <div className="container">

      <h1>My Food Delivery Website</h1>
      <nav>
        <ul className="nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/restaurants">Restaurants</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
            </li>

        </ul>
      </nav>
    </div>

    </header>
  )
}

export default Header

import {NavLink} from "react-router-dom"


const Header = () => {
  return (
    <header className="bg-dark py-4 text-white">
    <div className="container">
    <h1 className="display-3 py-2">My Social Media</h1>
      <nav>
        <ul className="nav">
            <li className="nav-item">
            <NavLink className="nav-link"  to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/profile" >Profile</NavLink>
            </li>
        </ul>
      </nav>
    </div>
     
    </header>
  )
}

export default Header

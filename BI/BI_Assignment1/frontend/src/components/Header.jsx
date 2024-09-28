import { Link } from "react-router-dom";
import logoUrl from "../assets/meetup-1.svg";
const Header = () => {
  return (
    <header className="bg-body-secondary">
      <nav className="navbar navbar navbar-expand-lg bg-body-tertiary ">

        <div className="container">

          <Link to={'/'} className="navbar-brand" href="#">
            <img src={logoUrl} height={60} className="py-2" />
          </Link>
          

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={"/"} className="nav-link fs-3">Home</Link>
            </li>
            <li className="nav-item">
              <Link to={"/events"} className="nav-link fs-3">Events</Link>
            </li>
          </ul>
      </div>
        </div>


      </nav>
      <hr />

 
    </header>
  );
};

export default Header;

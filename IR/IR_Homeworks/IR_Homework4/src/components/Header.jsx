import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-light  py-4">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <h1 className="navbar-brand">Company Logo</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link text-dark">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/employee">
                  Employee
                </Link>
              </li>
              <li>
                <Link className="nav-link text-dark" to="/report">
                  Report
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

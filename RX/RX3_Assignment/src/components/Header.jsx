import { Link } from "react-router";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Student Management System
          </Link>
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
                <Link className="nav-link active" to="/">
                  Students
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/classes">
                  Classes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/schools">
                  School
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="teachers">
                  Teachers
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

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.esm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <main className="container">
        <div className="py-4">
          <img
            className="img-fluid rounded"
            src="https://placehold.co/600x400?text=Players Playing"
            alt="Players Smiling"
          />
        </div>
        <div className="py-2">
          <h2>Our Players</h2>
          <p>
           Meet our talented team of players who work hard to achieve success on the fields
          </p>
          <Link className="btn btn-primary" to="/players">
            View Employees
          </Link>
        </div>

        <div className="py-2">
          <h2>Team Performance</h2>
          <p>
           Explore our {`team's`}   Performance Statics to gain insight into our success on the field
          </p>
          <Link to="/report" className="btn btn-primary">
            View Performance
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.esm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <main>
          <img
            className="img-fluid"
            src="https://placehold.co/2200x600?text=Players Banners"
            alt="Players Smiling"
          />
        <div className="container text-center my-4">
          <h2>Cricket Player Database</h2>
          <p>
          Explore the profile of your favourite Cricket  players.
          </p>
          <Link className="btn btn-primary" to="/players">
          Explore Players
          </Link>
        </div>

        <div className="my-4 container text-center">
          <h2>Players Report</h2>
          <p>
         Explore our latest players report to gain insights into our {`ICCC's `} performance and growth
          </p>
          <Link to="/report" className="btn btn-primary">
            View Report
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default App;

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
        <h1 className="display-1">Overview</h1>
        <div className="py-4">
          <img
            className="img-fluid rounded"
            src="https://placehold.co/600x400?text=Employee+Smiling"
            alt="taj mahal image"
          />
        </div>
        <div className="py-2">
          <h2>Our Employees</h2>
          <p>
            Meet our dedicated team of professional who work tirelessly to
            achieve our company goal's
          </p>
          <Link className="btn btn-primary" to="/employee">
            View Employees
          </Link>
        </div>

        <div className="py-2">
          <h2>Company Report</h2>
          <p>
            Explore our latest finacial report to gain insights into our
            company's performance and growth
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

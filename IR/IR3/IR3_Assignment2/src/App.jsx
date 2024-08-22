import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Link} from "react-router-dom"

const App = () => {
  return (
    <>
<Header/>

    <main className="container py-4">
      <h1 className="display-3">Featured Products</h1>
      <div className="row container">

        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/400x300" alt="Product 1" className="card-img-top" />
            <div className="card-body">
              <h4>Product 1</h4>
              <p>Descritption Of Product 1, Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta!</p>
              <Link className="btn btn-primary" to="products/1">View Product</Link>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/400x300" alt="Product 2" className="card-img-top" />
            <div className="card-body">
              <h4>Product 2</h4>
              <p>Descritption Of Product 2, Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta!</p>
              <Link className="btn btn-primary" to="products/2">View Product</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img src="https://via.placeholder.com/400x300" alt="Product 3" className="card-img-top" />
            <div className="card-body">
              <h4>Product 3</h4>
              <p>Descritption Of Product 3, Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta!</p>
              <Link className="btn btn-primary" to="products/3">View Product</Link>
            </div>
          </div>
        </div>

      </div>
    </main>
    <Footer/>
    </>

  );
};

export default App;

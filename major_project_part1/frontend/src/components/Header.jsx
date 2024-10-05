/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="container-fluid bg-secondary ">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand text-light fw-bold   w-25">
            MyShoppingSite
          </Link>

          <div className="d-flex align-items-center  position-relative  mx-2 w-25">
           <CiSearch size={30} className="position-absolute" style={{left:5}}/>
            <input
              className="form-control ps-5"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>

          <div className="d-flex align-items-center justify-content-end gap-2 w-25 ">
            <a href="#" className="btn btn-dark ">
              Login
            </a>

            <button className="btn btn-outline-dark ">
              <CiHeart size={30}/>
            </button>

            <button className="btn btn-outline-dark  ">
              Cart
              <FaShoppingCart size={30} className="ps-1"/>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

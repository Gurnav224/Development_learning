/* eslint-disable react/prop-types */
import Header from "../components/Header";
import { useEffect, useState } from "react";
import api from "../api/api";
import CategoriesSlider from "../components/CategoriesSlider";
import BannerSlider from "../components/BannerSlider";
import { Link } from "react-router-dom";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const categories = await api.getFeaturedCategory();
        setCategories(categories?.data?.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    }

    fetchCategories();
  }, []);

  return (
    <>
      <Header />
      <div className="container  my-5 ">
        <BannerSlider />
    

      </div>

      <div className="container text-center">
      <Link to={"/products"} className="btn  mx-auto btn-primary btn-lg fs-2 text-center my-4">OUR PRODUCTS</Link>
      </div>

      <div className="container my-4">
      <h2 className="display-4 text-center my-4">Our Categories</h2>
        <CategoriesSlider categories={categories} />


        <h2 className="display-4 text-center my-4">New Trends</h2>

        <div className="row my-3">
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-text">New Arrivals</p>
                    <h5 className="card-title">Summer Collection</h5>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Check out our best Collection to store warm in the style
                        season
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://images.pexels.com/photos/17824872/pexels-photo-17824872/free-photo-of-young-model-in-white-crop-top-and-black-jacket.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-text">New Fashion Daily</p>
                    <h5 className="card-title">Winter Collection</h5>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Check out our best Collection new daily style
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Home;

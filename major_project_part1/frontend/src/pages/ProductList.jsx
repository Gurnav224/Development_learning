import { useEffect, useState } from "react";
import Header from "../components/Header";
import api from "../api/api";
import { FaRupeeSign } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [ratings, setRatings] = useState(0);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await api.getAllProducts();
        setProducts(products?.data?.products);
      } catch (error) {
        console.error("error to fetching products", error);
      }
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const categories = await api.getFeaturedCategory();
        setCategories(categories?.data?.categories);
      } catch (error) {
        console.error("failed to fetch categories", error);
      }
    }
    fetchCategories();
  }, []);

  const handleChangeCategories = (event) => {
    const { value, checked } = event.target;
    console.log(checked)
    if(checked){
      // add category if checkbox checked
      setSelectedCategory((prev) => [...prev, value]);
    }
    else{
      // remove category if checkbox is unchecked
      setSelectedCategory((categories) => categories.filter( category => category !== value ))
    }
  };

  console.log(selectedCategory);

const filteredProducts = products.filter((product) => {

  console.log(ratings , parseInt(product.rating))

  const ratingFilter = ratings > 0 ? ratings <= parseInt(product.rating) : true;

  console.log("rating filter",ratingFilter)

  const categoryFilter = selectedCategory.length > 0 ? selectedCategory.includes(product.category):true

  return ratingFilter && categoryFilter
  
})
    

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <div className="my-4 ">
              <h3>Filters</h3>

              <div className="form-group">
                <label className="form-label" htmlFor="ratings">
                  Ratings:
                </label>

                <div className="d-flex align-items-center">
                  <span className="d-flex align-items-center mx-2">
                    <CiStar />
                  </span>
                  <input
                    className="form-range"
                    type="range"
                    name="price"
                    id="ratings"
                    min={0}
                    max={5}
                    onChange={(e) => setRatings(e.target.value)}
                  />
                  <span className="d-flex align-items-center mx-2">
                    <FaStar size={20} className="mx-1" /> {ratings}
                  </span>
                </div>
              </div>

              <div className="my-4 mx-2">
                <h3>Category</h3>

                {categories.map((category) => (
                  <div className="form-check my-3" key={category._id}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={category.name}
                      id={`category-${category.name}`}
                      onChange={handleChangeCategories}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`category-${category.name}`}
                    >
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-10 ">
            <div className="row">
              <div className="d-flex my-2">
                <h5>Showing All Products</h5>
                <span className="mx-2">
                  (showing {products.length} products)
                </span>
              </div>

              {filteredProducts.map((product) => (
                <div
                  className="col-12 col-md-6 col-lg-3  my-2"
                  key={product._id}
                >
                  <div className="card">
                    <img
                      src={product.thumbnail}
                      className="card-img-top object-fit-cover"
                      alt={product.name}
                      height={300}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p>
                        <FaRupeeSign />

                        {product.price}
                      </p>
                      <div className="d-flex">
                        <button className="btn btn-primary">ADD TO CART</button>
                        <button className="btn btn-outline-primary mx-2">
                          ADD TO WISHLIST
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;

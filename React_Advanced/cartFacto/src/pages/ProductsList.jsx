import Error from "../components/Error";
import Loading from "../components/Loading";
import Products from "../components/Products";
import { useProduct } from "../custom_hooks/ProductContext";

const ProductsList = () => {
  const { products, addToCart } = useProduct();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-white mb-8 text-center">
        Products List
      </h1>

      <Loading />

      <Error />


      <Products products={products} addToCart={addToCart} />
    </div>
  );
};

export default ProductsList;

import { useProduct } from "../custom_hooks/ProductContext";

const Products = () => {
  const { products, addToCart } = useProduct();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products?.map((product) => (
        <div
          key={`${product.id} - ${product.title}`}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="relative aspect-square">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            {product.discount && (
              <span className="absolute top-2 left-2 bg-red-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                {product.discount} %
              </span>
            )}
          </div>

          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
              {product.title}
            </h2>

            <p className="text-xl font-bold text-green-600 mb-2">
              ${product.price}
            </p>

            <div className="text-sm text-gray-600 mb-2">
              <p>
                {product.brand} {product.model} · {product.color}
              </p>
            </div>

            <p className="text-sm text-gray-500 italic mb-4">
              {product.category}
            </p>

            <button
              onClick={() => addToCart(product)}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;

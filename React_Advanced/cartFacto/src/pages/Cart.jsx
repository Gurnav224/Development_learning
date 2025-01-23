import { useProduct } from "../custom_hooks/ProductContext";

const Cart = () => {
  const { cart } =  useProduct();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Your Cart</h1>

      {cart.length > 0 ? (
        <ul className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
          {cart.map((product) => (
            <li key={product.id} className="p-4 sm:p-6">
              <div className="flex gap-4 sm:gap-6">
                {/* Product Image */}
                <div className="flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-32 h-32 object-cover rounded-lg border border-gray-200"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-900 mb-1">
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

                  <p className="text-sm text-gray-500 italic mb-3">
                    {product.category}
                  </p>

                 
                </div>
              </div>
            </li>
          ))}

        
        </ul>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl text-gray-500 mb-4">Your cart is empty</h2>
          <p className="text-gray-400">Start adding items to your cart!</p>
        </div>
      )}
    </div>
  );
};

export default Cart;

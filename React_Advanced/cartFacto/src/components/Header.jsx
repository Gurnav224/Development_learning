import { Link } from 'react-router-dom';
import CartStatus from './CartStatus'; 
const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo/Brand Name */}
        <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
          Cart Facto
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/products"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors gap-1"
              >
                Cart
                <CartStatus />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};


export default Header
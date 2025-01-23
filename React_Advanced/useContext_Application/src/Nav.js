/**
 * This is a placeholder for navigation.
 * You can integrate it with router of your choice.
 */
import { Link } from "react-router-dom";
import  ReviewItemsCounter from './components/ReviewItemsCounter'

export default function Nav() {
  return (
    <nav>
      <div className="logo">App</div>
      <div className="links">
        <Link to="/home" className="nav-link">
          Home
        </Link>
        <Link to="/pending" className="nav-link">
         Pending <ReviewItemsCounter/>
        </Link>
        <Link to="/review" className="nav-link">Review</Link>
        {/* Your routes can go here */}
      </div>
    </nav>
  );
}

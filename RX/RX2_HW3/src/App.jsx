
import {BrowserRouter as Router , Route , Routes , Link} from "react-router-dom"
import Inventory from "./pages/Inventory"
import RemainingItems from "./pages/RemainingItems"
import AddNewItem from "./pages/AddNewItem"
import RemovedItems from "./pages/RemovedItems"
import './App.css';

function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/inventory">Inventory</Link>
            </li>
            <li>
              <Link to='removed-item'>Removed Items</Link>
            </li>
            <li>
              <Link to='/remaining-items'>Remaining Items</Link>
            </li>
            <li>
              <Link to="/">Add new Items</Link>
            </li>
          </ul>
        </nav>

      <Routes>

          <Route path="/inventory" element={<Inventory/>}/>
          <Route path="/remaining-items" element={<RemainingItems/>} />
          <Route path="/" element={<AddNewItem/>} />
          <Route path="/removed-item" element={<RemovedItems/>} />
      </Routes>

      </div>


    </Router>
  )
}

export default App

import "./styles.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Nav from "./Nav";
import Pending from "./pages/Pending";
import Review from "./pages/Review";
import Home from "./pages/Home";
import {ReviewProvider} from "./context/ReviewContext";



export default function App() {
  return (
    <ReviewProvider>
      <Router>
        <div className="app">
          <Nav />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/pending" element={<Pending />} />
            <Route path="/review" element={<Review />} />
          </Routes>
        </div>
      </Router>
    </ReviewProvider>
  );
}

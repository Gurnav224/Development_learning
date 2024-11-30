import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Header from "./components/Header";
import MovieView from "./feature/movie/MovieView";
import MovieForm from "./feature/movie/MovieForm";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"
import Home from "./page/Home";

function App() {
  
  return (
    <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movies" element={<MovieView/>} />
          <Route path="/add_movie" element={<MovieForm/>} />
        </Routes>
    </Router>
  )
}

export default App

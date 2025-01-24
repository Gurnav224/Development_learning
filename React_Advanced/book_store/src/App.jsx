import "./App.css";
import Header from "./components/Header";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import { BookProvider} from './context/BookContext'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
 




  return (
    <BookProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/addBook" element={<AddBook />} />
        </Routes>
      </Router>
    </BookProvider>
  );
}

export default App;

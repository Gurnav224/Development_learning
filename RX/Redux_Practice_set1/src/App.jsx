import BookView from "./feature/books/BookView"
import Header from "./components/Header"
import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import BookForm from "./feature/books/BookForm"
function App() {
  
 
  
  return (
<Router>
    <Header/>
    <Routes>
      <Route path="/books" element={<BookView/>} />
      <Route path="/add_books"  element={<BookForm/>}/>
      
    </Routes>
    </Router>
    
  )
}

export default App

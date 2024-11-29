import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBookAsync } from "./bookSlice";

const BookForm = () => {
    const [msg , setMsg] = useState("")
    const dispatch = useDispatch()
  const [newBook, setNewBook] = useState({
    bookName: "book1",
    author: "B.j Thoms",
    genre: "horror",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBookAsync(newBook))
    setMsg('new book added successfully')
  }

  return (
    <div className="container">
      <h1 className="my-4">Book Form</h1>
      <form>
        <div className="mb-3">
          <label className="form-label" htmlFor="bookName">Book Name:</label>
          <input className="form-control" type="text" name="bookName" id="bookName" value={newBook.bookName} onChange={handleInputChange}/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="author">Author:</label>
          <input className="form-control" type="text" name="author" id="author" value={newBook.author} onChange={handleInputChange}/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="genre">Genre:</label>
          <input className="form-control" type="text" name="genre" id="genre"  value={newBook.genre} onChange={handleInputChange}/>
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>Add Book</button>
        
      </form>
      {
        msg && <p className="fs-3 my-3 text-success">{msg}</p>
        }
    </div>
  );
};

export default BookForm;

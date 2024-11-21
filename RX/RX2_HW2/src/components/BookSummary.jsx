import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { removeBook } from "../actions";

const BookSummary = () => {
    const books = useSelector((state) => state.books);
    const dispatch = useDispatch();

    const removeBookHandler = (isbn) => {
        dispatch(removeBook(isbn))

    }

  return (
    <div>
      <h1>Book Summary</h1>
      <p>Total Books : {books.length}</p>
      <ul>
        {
        books.map((book) => (
        <li key={`${book.title}-${book.author}`}>
            {book.title} by {book.author} - ({book.isbn})
            <button onClick={() => removeBookHandler(book.isbn)}>Remove</button>
        </li>
        ))
        }
      </ul>
    </div>
  )
}

export default BookSummary

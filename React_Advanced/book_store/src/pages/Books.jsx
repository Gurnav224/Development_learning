import useBook from "../context/BookContext";

const Books = () => {
  const { filtered:books, filterBooks, toggleBookStatus , deleteBook } = useBook()
    

  return (
    <div>
      <h1>Books ({books.length})</h1>

      <div>
        <button onClick={() => filterBooks("")}>All Books</button>
        <button onClick={() => filterBooks("read")}>Read</button>
        <button onClick={() => filterBooks("unread")}>Uread</button>
      </div>

      <ul>
        {books.map((book) => (
          <li key={book.title}>
            <h2>Title: {book.title}</h2>
            <p>Author: {book.author}</p>
            <p>
              Status: {book.status}
              <button onClick={() => toggleBookStatus(book.title)}>
                toggle Status
              </button>
              <button onClick={() => deleteBook(book.title)}>Remove</button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;

import useBook from "../context/BookContext";

const AddBook = () => {
  const { setNewBook, newBook, handleAddBook } = useBook();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setNewBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Add Book</h1>
      <form onSubmit={handleAddBook}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={inputChangeHandler}
            value={newBook.title}
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            onChange={inputChangeHandler}
            value={newBook.author}
          />
        </div>
        <div>
          <label htmlFor="status">Select Status</label>
          <select
            onChange={inputChangeHandler}
            value={newBook.status}
            name="status"
            id="status"
          >
            <option value="">choose status</option>
            <option value="read">Read</option>
            <option value="unread">unread</option>
          </select>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default AddBook;

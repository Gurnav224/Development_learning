import useFetch from "../useFetch.jsx";

const Books = () => {
  const { data, loading, error } = useFetch("https://book-backend-yfgj.onrender.com/books", []);

  const books = data?.books;

  if (error) return <p>error : {error}</p>;

  return books ? (
    <div>
      <h1>All Books</h1>
      <ul>
        {books?.map((book) => (
          <li key={book._id}>{book.title}</li>
        ))}
      </ul>
    </div>
  ) : (
    loading && <p>Loading..............</p>
  );
};

export default Books;

import useFetch from "../useFetch.jsx";

const Books = () => {
  const { data, loading, error } = useFetch("https://book-backend-seven.vercel.app/books", []);

  const books = data?.books;


  const deleteBook = async (bookId) =>{
    console.log(bookId)
    try {
      const response = await fetch(`https://book-backend-seven.vercel.app/books/${bookId}`,{
        method:'DELETE'
      })

      if(!response.ok) {
        throw Error('Network Error')
      }

      const data = await response.json();

      if(data){
        console.log('book deleted successfully',data)
        window.location.reload()
      }


    } catch (error) {
      console.error('error to delete book',error)
    }
  }

  if (error) return <p>error : {error}</p>;

  return books ? (
    <div>
      <h1>All Books</h1>
      <ul>
        {books?.map((book) => (
          <li key={book._id}>{book.title}
          {" "}
          <button onClick={()=>deleteBook(book._id)}>Delete</button>
          </li>
          
        ))}
      </ul>
    </div>
  ) : (
    loading && <p>Loading..............</p>
  );
};

export default Books;

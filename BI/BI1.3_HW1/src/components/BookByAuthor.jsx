/* eslint-disable react/prop-types */
import useFetch from "../useFetch"

const BookByAuthor = ({author}) => {
    const {data , error, loading}  = useFetch(`https://book-backend-seven.vercel.app/books/author/${author}`,{});

    const books = data?.books

    if(error) return <p>error {error}</p>
  return books ? (
    <div>
    <h2>Books By {author}</h2>
    <ul>
        {
        books?.map((book) => (
        <li key={book._id}>
            {book.title}
        </li>
        ))
        }
    </ul>
      
    </div>
  ) : (
    loading && <p>{loading}</p>
  )
}

export default BookByAuthor

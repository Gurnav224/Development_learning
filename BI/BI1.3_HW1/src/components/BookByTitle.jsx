/* eslint-disable react/prop-types */
import useFetch from "../useFetch"

const BookByTitle = ({title}) => {
    const {data , loading, error} = useFetch(`https://book-backend-seven.vercel.app/books/${title}`,{})


    const book = data?.book;


    if(error) return <p>error: {error}</p>




  return book ?  (
    <div>
       <h1>{book.title}</h1>
       <p><strong>Author: </strong>{book.author}</p>
       <p><strong>Published Year: </strong>{book.publishedYear}</p>
       <p><strong>Genre: </strong>{book.genre.join(", ")}</p>
    </div>
  ):(
    loading && <p>{loading}</p>
  )
}

export default BookByTitle

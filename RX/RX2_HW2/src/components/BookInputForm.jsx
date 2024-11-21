import { useState } from "react"
import { useDispatch  } from "react-redux";
import { addBook } from "../actions";

const BookInputForm = () => {
   const dispatch = useDispatch()
    const [newBook , setNewBook] = useState({
      title: "",
      author: "",
      isbn: "",
    });


    const handleInputChange = (event) => {
      const {name , value} = event.target ;
      setNewBook((prev) => ({
        ...prev, 
        [name]:value
      }))
    }

    const addNewBookHandler = () => {
     dispatch(addBook(newBook))

     setNewBook({
      title: "",
      author: "",
      isbn: "",
    });
    }
    

  return (
    <div>
      <h1>Library Management </h1>
      <input type="text" name="title" value={newBook.title}  onChange={handleInputChange}/>
      <input type="text" name="author" value={newBook.author} onChange={handleInputChange}/>
      <input type="text"  name="isbn" value={newBook.isbn} onChange={handleInputChange}/>
      <button onClick={addNewBookHandler}>Add Book</button>
    </div>
  )
}

export default BookInputForm

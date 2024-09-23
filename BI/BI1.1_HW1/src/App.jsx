import BookByAuthor from "./components/BookByAuthor"
import BookByTitle from "./components/BookByTitle"
import Books from "./components/Books"


function App() {

  return (
    <>
      <Books/>
      <BookByTitle title={"Shoe Dog"} />
      <BookByAuthor author={"Harper Lee"} />
    </>
  )
}

export default App

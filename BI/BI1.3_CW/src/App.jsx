import AddMovieForm from './components/AddMovieForm'
import MovieByTitle from './components/MovieByTitle'
import Movies from './components/Movies'

function App() {

  return (
    <>
    <AddMovieForm/>
     <Movies/>
     <MovieByTitle title={"Gully Boy"} />
    </>
  )
}

export default App

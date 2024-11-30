import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addMovieAsync, updateMovieAsync } from "./movieSlice";
import { useLocation, useNavigate } from "react-router-dom";

const MovieForm = () => {
  const location = useLocation();
  const editMovie = location.state;
  const dispatch = useDispatch()
  const [newMovie, setNewMovie] = useState({
    title: "",
    director: "",
    genre: "",
  });

  const navigate = useNavigate();


  const [msg , setMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  useEffect(() => {
    if(editMovie){
      setNewMovie(editMovie)
    }
  },[editMovie])

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMovieAsync(newMovie))
    setMsg('new movie added successfully')
    setNewMovie({
      title: "",
      director: "",
      genre: "",
    })
  };

  const handleMovieEditForm = (e) => {
    e.preventDefault()
    dispatch(updateMovieAsync({updatedMovie:newMovie,movieId:editMovie._id}))
    setMsg('movie details updated successfully')

    setTimeout(() => {
      navigate('/movies')
    }, 1000);
  }



  return (
    <div className="container">
    {
      editMovie ? (
        <>
          <h1>Edit Movie</h1>
          <form>
        <div className="mb-3">
          <label className="form-label" htmlFor="title">
            Title:
          </label>
          <input
            className="form-control"
            type="text"
            name="title"
            id="title"
            value={newMovie.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="director">
            Director:
          </label>
          <input
            className="form-control"
            type="text"
            name="director"
            id="director"
            value={newMovie.director}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="genre">
            genre:
          </label>
          <input
            className="form-control"
            type="text"
            name="genre"
            id="genre"
            value={newMovie.genre}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleMovieEditForm} className="btn btn-primary">
          Add Movie
        </button>
       
      </form>
       { msg && <p className="fs-3 text-success my-4">{msg}</p>}
        </>
      ):(
      <>

      <h1 className="my-4">Add Movie</h1>
      <form>
        <div className="mb-3">
          <label className="form-label" htmlFor="title">
            Title:
          </label>
          <input
            className="form-control"
            type="text"
            name="title"
            id="title"
            value={newMovie.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="director">
            Director:
          </label>
          <input
            className="form-control"
            type="text"
            name="director"
            id="director"
            value={newMovie.director}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="genre">
            genre:
          </label>
          <input
            className="form-control"
            type="text"
            name="genre"
            id="genre"
            value={newMovie.genre}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit} className="btn btn-primary">
          Add Movie
        </button>
       
      </form>
       { msg && <p className="fs-3 text-success my-4">{msg}</p>}

      </>
      )
    }

    </div>
  );
};

export default MovieForm;

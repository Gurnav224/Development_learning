import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovieAsync } from "./movieSlice";

const MovieForm = () => {
  const dispatch = useDispatch()
  const [newMovie, setNewMovie] = useState({
    title: "",
    director: "",
    genre: "",
  });

  const [msg , setMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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



  return (
    <div className="container">
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
            value={newMovie.director}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit} className="btn btn-primary">
          Add Movie
        </button>
        {
        msg && <p className="fs-3 text-success my-4">{msg}</p>
        }
      </form>
    </div>
  );
};

export default MovieForm;

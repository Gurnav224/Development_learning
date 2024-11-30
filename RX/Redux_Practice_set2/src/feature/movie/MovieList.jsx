/* eslint-disable react/prop-types */
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MovieList = ({ movies, handleDeleteMovie, status }) => {
  if (status === "loading") {
    return (
      <ul className="list-group">
        {Array.from({ length: 5 }).map((_, index) => (
          <li className="list-group-item" key={index}>
            <Skeleton
              height={20}
              width={150}
              style={{ marginBottom: "10px" }}
            />
            <Skeleton
              height={20}
              width={100}
              style={{ marginBottom: "10px" }}
            />
            <Skeleton
              height={20}
              width={200}
              style={{ marginBottom: "10px" }}
            />
            <Skeleton height={40} width={80} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="list-group">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <li className="list-group-item" key={movie._id}>
            <p>
              <strong>Title: </strong>
              {movie.title}
            </p>
            <p>
              <strong>Director: </strong>
              {movie.director}
            </p>
            <p>
              <strong>Genre: </strong>
              {movie.genre}
            </p>
            <button
              onClick={() => handleDeleteMovie(movie._id)}
              className="btn btn-danger float-end"
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <>
          <p>No movies found</p>
        </>
      )}
    </ul>
  );
};

export default MovieList;

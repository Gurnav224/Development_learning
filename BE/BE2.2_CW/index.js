const {initializeDatabase  } = require('./DB')

const Movie = require('./models/movie.schema');

initializeDatabase();






const movie = {
    title: "Inception",
    releaseYear: 2010,
    genre: ["Science Fiction", "Thriller"],
    director: "Christopher Nolan",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    language: "English",
    country: "USA",
    rating: 8.8,
    plot: "A skilled thief is given a chance at redemption if he can successfully perform inception on a target's mind.",
    awards: "Academy Awards for Best Cinematography, Sound Editing, Sound Mixing, and Visual Effects",
    posterUrl: "https://example.com/poster2.jpg",
    trailerUrl: "https://example.com/trailer2.mp4"
  };


  


async function createMovie(movie) {
    try {
        const newMovie =  new Movie(movie);
        const savedMovie =  await newMovie.save();

        console.log('newly added movie',savedMovie)
    } catch (error) {
        console.error('Error to add  movie  ',error)
    }
}

// createMovie(Anothermovie)


// find the a movie with a particular title of the movie


async function getMovieByTitle(movieTitle){
  try {
    const movie = await Movie.findOne({title:movieTitle});
    console.log('movie by title',movie)
  } catch (error) {
    throw error
  }
}

// getMovieByTitle("Dilwale Dulhania Le Jayenge")
// getMovieByTitle("Kabhi Khushi Kabhie Gham")

// find all the movies that in the database


async function getAllTheMovies(){
  try {
    const movies = await Movie.find({});
    console.log('retrieved movies from the datbase,',movies)
  } catch (error) {
    throw error
  }
}

// getAllTheMovies()



// get all the movies by the director name ;


async function getMoviesByDirectorName(directorName){
  try {
    const movies = await Movie.find({director:directorName});
    console.log('all movies by director ',movies)
  } catch (error) {
    throw error
  }
}

// getMoviesByDirectorName("Rajkumar Hirani")
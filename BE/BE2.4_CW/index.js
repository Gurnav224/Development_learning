


const {initializeDatabase  } = require('./config/db.connect')

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

// createMovie(movie)

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


// find movie by id and update's its rating 


async function updateMovieById(movieId,dataToUpdate){
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(movieId,dataToUpdate,{new:true});
        console.log('movie updated by id',updatedMovie)
    } catch (error) {
        console.error('error to updating the movie',error)
    }
}

// updateMovieById("66de90a3e9dfd9a807d8f82c",{rating:"7.6"})
// updateMovieById("66de90a3e9dfd9a807d8f82c",{releaseYear:2002})


// find one data and updates its value

async function updateMovieDetail(movieTitle,dataToUpdate){
    try {
        const updatedMovie   = await Movie.findOneAndUpdate({title:movieTitle},dataToUpdate,{new:true});
        console.log("movie updated by title",updatedMovie)
    } catch (error) {
        console.error('error to updating the movie',error)
    }
}


// updateMovieDetail('Kabhi Khushi Kabhie Gham' , {releaseYear:2001})



// find the movie by id and delete it from the database;


async function deleteMovieById(movieId){
  try {
    const movie = await Movie.findByIdAndDelete(movieId);

    console.log('movie deleted successfully ',movie)
  } catch (error) {
    console.error('getting error while deleting movie ',error)
  }
}


// deleteMovieById('66e1284991af245be4ce3ad9')

// find the movie by title and delete it from the database;


async function deleteMovieByTitle(movieTitle){
  try {
    const movie = await Movie.findOneAndDelete({title:movieTitle});

    console.log('movie deleted successfully ',movie)
  } catch (error) {
    console.error('getting error while deleting movie',error)
  }
}


// deleteMovieByTitle('3 Idiots')
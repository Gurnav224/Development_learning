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

  const Anothermovie = {
    title: "The Dark Knight",
    releaseYear: 2008,
    genre: ["Action", "Crime", "Drama"],
    director: "Christopher Nolan",
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"],
    language: "English",
    country: "USA",
    rating: 9.0,
    plot: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    awards: "Academy Awards for Best Supporting Actor (Heath Ledger) and Best Sound Editing",
    posterUrl: "https://example.com/poster-dark-knight.jpg",
    trailerUrl: "https://example.com/trailer-dark-knight.mp4"
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

createMovie(Anothermovie)
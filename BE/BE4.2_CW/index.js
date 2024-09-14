const {initializeDatabase  } = require('./config/db.connet')
const express = require('express');
const Movie = require('./models/movie.schema');

initializeDatabase();





const app = express();

app.use(express.json())


app.get('/', (req, res)=>{
  res.send('movie server is running')
})


// create a post route to add new movie 

async function createMovie(movie){
  try {
    const newMovie = new Movie(movie);
    const savedMovie = await newMovie.save();
    return savedMovie
  } catch (error) {
    throw error
  }
}

app.post('/movies', async (req, res) => {
  try {
    const movie = await createMovie(req.body);
    res.status(201).json({message:'new movie created successfully', newMovie:movie})
  } catch (error) {
    res.status(500).json({error:'failed to adde new movie'})
  }
})

// find the a movie with a particular title of the movie


async function getMovieByTitle(movieTitle){
  try {
    const movie = await Movie.findOne({title:movieTitle});
    return movie
  } catch (error) {
    throw error
  }
}

app.get('/movies/:title', async (req , res) =>{
  const {title} = req.params

  try {
    const movie = await getMovieByTitle(title);

    if(movie){
      res.status(200).json({message:'movie by title', movie:movie})
    }
    else{
      res.status(404).json({error:'Movie not found'})
    }
  } catch (error) {
    res.status(500).json({error:'failed to  fetch the movie'})
  }
})



// find all the movies that in the database


async function getAllTheMovies(){
  try {
    const movies = await Movie.find({});
    return movies
  } catch (error) {
    throw error
  }
}


app.get('/movies', async (req , res)=> {
  try {
    const movies = await getAllTheMovies();

    if(movies.length !== 0 ){
      res.status(200).json({message:'Get All Movies',movies:movies});
    }
    else{
      res.status(404).json({error:'No Movies found'})
    }
  } catch (error) {
    res.status(500).json({error:'failed to fetch movies'})
  }
})


// get all the movies by the director name ;


async function getMoviesByDirectorName(directorName){
  try {
    const movies = await Movie.find({director:directorName});
    return movies
  } catch (error) {
    throw error
  }
}

app.get('/movies/director/:directorName', async (req , res) => {
  const {directorName} = req.params;
  try {
    const movies = await getMoviesByDirectorName(directorName);

    if(movies != 0){
      res.status(200).json({message:'get movies by director name', movies:movies})
    }
    else{
      res.status(404).json({error:'movies not found'})
    }

  } catch (error) {
    res.status(500).json({error:'failed to fetch movies'})
  }
})



// get all the movies by the genre

async function readMovieByGenre(genre){
  try {
    const movies = await Movie.find({genre:genre});
    return movies
  } catch (error) {
    throw error
  }
}


app.get('/movies/genre/:genre', async (req, res) => {
   const { genre } = req.params;
  try {
    const movies = await readMovieByGenre(genre);

    if(movies.length !==0 ){
      res.status(200).json({message:'get all movie by genre', movies:movies})
    }
    else{
      res.status(404).json({error:'Movie not found'})
    }

  } catch (error) {
    res.status(500).json({message:'failed to fetch movie'})
  }
})


const PORT = 3000;


app.listen(PORT , ()=> {
  console.log(`server started at http:/localhost:${PORT}`)
})
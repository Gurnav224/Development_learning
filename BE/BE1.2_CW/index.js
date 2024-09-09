const {initializeDatabase  } = require('./DB')
const fs = require('fs')

const Movie = require('./models/movie.schema');

const jsonData = fs.readFileSync('./movie.json',"utf-8");
const moviesData = JSON.parse(jsonData)




initializeDatabase()


async function seedData() {
    try {
        for(let movie of moviesData){
           const newMovie =  new Movie({
            title:movie.title,
            releaseYear:movie.releaseYear,
            genre:movie.genre,
            director:movie.director,
            actors:movie.actors,
            language:movie.language,
            country:movie.country,
            rating:movie.rating,
            plot:movie.plot,
            awards:movie.awards,
            posterUrl:movie.posterUrl,
            trailerUrl:movie.trailerUrl
           })

           newMovie.save()

           console.log('Movie Data ',newMovie.title)
        }
    } catch (error) {
        console.error('Error seeding the movie Data ',error)
    }
}


seedData()
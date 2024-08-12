/* eslint-disable react/prop-types */


const CarsList = ({cars})=>{

  const carListing = cars.map((car)=>(
    <div key={car.key}>
      <h3>Brand: {car.brand}</h3>
      <p>Price: {car.price}</p>
    </div>
  ))
  return(
    <>
      <h2>Cars</h2>
      {carListing}
    </>
  )
}

const Hotels = ({hotels})=>{

  const hotelListing = hotels.map((hotel)=>(
    <div key={hotel.id}>
      <h3>Name: {hotel.name}</h3>
      <p>location: {hotel.location}</p>
    </div>
  ))

  return(
    <>
      <h2>Hotels</h2>
      {hotelListing}
    </>
  )
}

const PodcastList = ({podcasts})=>{

  const podcastListing = podcasts.map((podcast)=>(
    <div key={podcast.id}>
          <h3>Title: {podcast.title}</h3>      
          <p>Host: {podcast.Host}</p>
    </div>
  ))

  return(
    <>
      <h2>Podcast List</h2>
      {podcastListing}
    </>
  )
}
const ArticleList = ({articles}) => {
  const articleListing = articles.map((article)=>(
    <div key={article.id}>
      <h3>{article.title}</h3>
      <p>{article.content}</p>
    </div>
  ))

  return(
    <>
      <h2>Articles</h2>
      {articleListing}
    </>
  )
}

const MovieList = ({movies})=>{
  const movieListing = movies.map((movie)=>(
    <div key={movie.id}>
        <h3> Title: {movie.title}</h3>
        <p>Director: {movie.director}</p>
    </div>
  ))
  return(
    <>
      <h2>Movies</h2>
      {movieListing}
    </>
  )
}

function App() {
   const cars = [
    {
      id:1,
      brand:'Toyota',
      price:25000
    },
    {
      id:2,
      brand:'Honda',
      price:30000
    },
    {
      id:3,
      brand:'Ford',
      price:35000
    }
   ]

   const hotels = [
    {
      id:1,
      name:'Marriott',
      location:'New York'
    },
    {
      id:2,
      name:'Hilton',
      location:'Los Angeles'
    },
    {
      id:3,
      name:'Sheraton',
      location:"Chicago"
    }
   ]

   const podcasts = [
    {
      id:1,
      title:'podcast 1',
      Host:'Host 1'
    },
    {
      id:2,
      title:'podcast 2',
      Host:'Host 2'
    },
    {
      id:3,
      title:'podcast 3',
      Host:'Host 3'
    },

   ]

   const articles = [
    {
      id:1,
      title:'Article 1',
      content:'content 1'
    },
    {
      id:2,
      title:'Article 2',
      content:'content 2'
    },
    {
      id:3,
      title:'Article 3',
      content:'content 3'
    },
   ]

   const movies = [
    {
      id:1,
      title:'Movie 1',
      director:'Director 1'
    },
    {
      id:2,
      title:'Movie 2',
      director:'Director 2'
    },
    {
      id:3,
      title:'Movie 3',
      director:'Director 3'
    },
    
   ]

  return (
    <>
    <CarsList cars={cars} />
    <hr />
    <Hotels hotels={hotels} />
    <hr />
    <PodcastList podcasts={podcasts} />
    <hr />
    <ArticleList articles={articles} />
    <hr />
    <MovieList movies={movies} />
    
    </>
  )
}

export default App

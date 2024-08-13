/* eslint-disable react/prop-types */


const LaptopList = ({laptops}) =>{

  const filterLaptops = laptops.filter((laptop)=>laptop.price > 4999 && laptop.price < 15000);

  const laptopListing = filterLaptops.map((laptop)=>(
    <div key={laptop.id}>
      <h3>Brand: {laptop.brand}</h3>
      <p>Price: {laptop.price}</p>
    </div>
  ))

  return(
    <>
      <h2>Laptops List</h2>
      {laptopListing}
    </>
  )
}

const BookList = ({books})  => {
  const filterBooks = books.filter((book) => book.genre === "Fantasy");


  const bookListing = filterBooks.map((book)=>(
    <div key={book.id}>
      <h3>Title: {book.title}</h3>
      <p>Genre: {book.genre}</p>
    </div>
  ))

  return(
    <>
      <h2>Books List</h2>
      {bookListing}
    </>
  )
}

const PodcastList = ({podcasts}) =>{

  const filterPodcasts = podcasts.filter((podcast) => podcast.duration > 30);

  const podcastListing = filterPodcasts.map((podcast)=>(
    <div key={podcast.id}>
      <h3>Title: {podcast.title}</h3>
      <p>Duration: {podcast.duration}</p>
    </div>
  ))

  return(
    <>
      <h2>Podcast</h2>
      {podcastListing}
    </>
  )
}

const MovieList = ({movies}) =>{
  const filterMovie = movies.filter((movie) => movie.genre === "Action");
  const movieListing = filterMovie.map((movie)=>( 
    <div key={movie.id}> 
      <h3>Title: {movie.title}</h3>
      <p>Genre: {movie.genre}</p>
    </div>
  ))
  return(
    <>
      <h2>Movie List</h2>
      {movieListing}
    </>
  )
}

const JobList = ({jobs}) =>{
  const filterJob = jobs.filter((job) => job.type === 'Full-time');

  const joblisting = filterJob.map((job)=>(
    <div key={job.id}>

    <h3>Title: {job.title}</h3>
    <p>Type: {job.type}</p>
    </div>
  ))

  return(
    <>
      <h2>Job List</h2>
      {joblisting}
    </>
  )
}

const SongList = ({songs}) =>{
 const filterSongs = songs.filter((song) => song.artist === 'Artist 1');

 const songlisting = filterSongs.map((song)=>(
  <div key={song.id}>
    <h3>{song.title}</h3>
    <p>{song.artist}</p>
  </div>
 ))
  return (
    <>
      <h2>Song List</h2>
      {songlisting}
    </>
  )
}

function App() {
 
  const laptops = [

    { id: 1, brand: "Dell", price: 8000 },

    { id: 2, brand: "HP", price: 7000 },

    { id: 3, brand: "Lenovo", price: 19000 },

  ];


  const books = [

    { id: 1, title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy" },

    { id: 2, title: "The Hobbit", genre: "Self-help" },

    { id: 3, title: "Mistborn: The Final Empire", genre: "Fantasy" },

  ];

  const podcasts = [

    { id: 1, title: "Tech Talk", duration: 45 },

    { id: 2, title: "Business Insights", duration: 25 },

    { id: 3, title: "Science Hour", duration: 60 },

  ];

  const movies = [

    { id: 1, title: "Mission Impossible", genre: "Action" },

    { id: 2, title: "Die Hard", genre: "Action" },

    { id: 3, title: "The Avengers", genre: "Adventure" },

  ];

  const jobs = [

    { id: 1, title: "Software Engineer", type: "Full-time" },

    { id: 2, title: "Marketing Manager", type: "Part-time" },

    { id: 3, title: "Data Analyst", type: "Full-time" },

  ];

  const songs = [

    { id: 1, title: "Song 1", artist: "Artist 1" },

    { id: 2, title: "Song 2", artist: "Artist 2" },

    { id: 3, title: "Song 3", artist: "Artist 1" },

  ];

  return (
    <>
   <LaptopList laptops={laptops} />
   <hr />
   <BookList books={books} />
   <hr />
   <PodcastList podcasts={podcasts} />
   <hr />
   <MovieList movies={movies}/>
   <hr />
   <JobList jobs={jobs} />
  <hr />
  <SongList songs={songs} />
    </>
  )
}

export default App



const WelcomeMessage = () =>{
  return <h1>Discover the World of the JSX !</h1>
}

const GreetActor = () =>{
  const name = "Tom Hardy"
  return <h1>Welcome, {name} fans!</h1>
}

const ExternalLink = ()=>{
  const url = "https://www.reactjs.org/";
  return <a href={url} target="_blank">Explore React Documentation</a>
}


const VideoPlayer = ()=>{

  // const url = "https://videos.pexels.com/video-files/6831202/6831202-uhd_2560_1440_25fps.mp4";

  const url = "https://www.example.com/video.mp4"

  return (
    <div>
      <video controls src={url} width={500}></video>
    </div>
  )
}

const MovieDetails = ()=>{
  const movie = {

    title: "Forrest Gump",

    director: "Robert Zemeckis",

    year: 1994,

    rating: "PG-13",

    duration: "2h 22min"

  }


  return(
    <div>
     <h1>Movie Details</h1>
      <p><strong>Title: </strong>{movie.title}</p>
      <p><strong>Director: </strong>{movie.director}</p>
      <p><strong>Year: </strong>{movie.year}</p>
      <p><strong>Rating: </strong>{movie.rating}</p>
      <p><strong>Duration: </strong>{movie.duration}</p>
    </div>
  )
}

function App() {
  return (
    <>
    <WelcomeMessage/>

    <GreetActor/>

    <ExternalLink/>

    <VideoPlayer/>

    <MovieDetails/>
    </>
  );
}

export default App;

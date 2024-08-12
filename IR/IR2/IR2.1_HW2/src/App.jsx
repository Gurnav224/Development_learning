/* eslint-disable react/prop-types */


const LaptopList = ({laptops})=>{

  const laptopListing = laptops.map((laptop)=>(
    <div key={laptop.id}>
        <h3>{laptop.brand}</h3>
        <p>${laptop.price}</p>
    </div>
  ))

  return(
    <>
      <h2>Laptops</h2>
      {laptopListing}
    </>
  )
}

const TourList = ({tourists})=>{
  const tourListing = tourists.map((tourist)=>(
    <div key={tourist.id}>
      <h3>{tourist.spot}</h3>
      <p>{tourist.location}</p>
    </div>
  ))

  return(
    <>
      <h2>Tourist Spots</h2>
      {tourListing}
    </>
  )
}

const PodcastList = ({podcasts}) =>{

  const podcastListing = podcasts.map((podcast)=>(
    <div key={podcast.id}>
        <h3>Episode: {podcast.episode}</h3>
        <p>Duration: {podcast.duration}</p>
    </div>
  ))
  return(
    <>
      <h2>Podcast </h2>
      {podcastListing}
    </>
  )
}

const NewsListing = ({news})=>{
    const newsListing = news.map((newss)=>( 
      <div key={newss.id}>
        <h3>{newss.article}</h3>
        <p>{newss.description}</p>
      </div>
    ))
  return(
    <>
      <h2>News Articles</h2>
      {newsListing}
    </>
  )
}

const GameListing  = ({games})=>{
    const gameListing = games.map((game)=>(
      <div key={game.id}>
        <h3>{game.name}</h3>
        <p>Genre: {game.genre}</p>
      </div>
    ))
  return(
    <>
      <h2>Games</h2>
      {gameListing}
    </>
  )
}



function App() {
  const laptops = [
    {
      id:1,
      brand:'Dell',
      price:999
    },
    {
      id:2,
      brand:'HP',
      price:899
    },
    {
      id:1,
      brand:'Lenovo',
      price:1099
    },

  ]

  const tourists = [
    {
      id:1,
      spot:'Grand Canyon',
      location:'Amazon, USA'
    },
    {
      id:2,
      spot:'Eiffel Tower',
      location:'Paris, France'
    },
    {
      id:3,
      spot:'Great Wall Of China',
      location:'Beijing , China'
    },

  ]

  const podcasts = [
    {
      id:1,
      episode:'Episode 1',
      duration:'30 Mintues'
    },
    {
      id:2,
      episode:'Episode 2',
      duration:'45 Mintues'
    },
    {
      id:1,
      episode:'Episode 3',
      duration:'60 Mintues'
    },

  ]

  const news = [
    {
      id:1,
      article:'News 1',
      description:'Description 1'
    },
    
    {
      id:2,
      article:'News 2',
      description:'Description 2'
    },
    {
      id:3,
      article:'News 3',
      description:'Description 3'
    },

  ]

  const games = [
    {
      id:1,
      name:'Game 1',
      genre:'Action'
    },
    
    {
      id:2,
      name:'Game 2',
      genre:'Adventure'
    },
    {
      id:3,
      name:'Game 3',
      genre:'Stategy'
    },

  ]

  return(
    <>
  <LaptopList laptops={laptops} />
  <hr />
  <TourList tourists={tourists} />
  <hr />
  <PodcastList podcasts={podcasts} /> 
  <hr />
  <NewsListing news={news} />
  <hr />
  <GameListing games={games} />
    </>
  );
}

export default App;

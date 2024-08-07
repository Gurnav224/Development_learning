

const CarDetails = ()=>{
  const car = {

    make: "Tesla",

    model: "Model S",

    year: 2022,

    color: "Black",

  };

  return(
    <>
      <h1>Car Details</h1>
      <p>Make: {car.make}</p>
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>
      <p>Color: {car.color}</p>
    </>
  )
}


const MusicProfile = ()=>{
  const artist = {

    name: "Beyoncé",

    genre: "R&B",

    albums: 8,

    awards: ["Grammy Award", "MTV Video Music Award"],

  };

  return(
    <>
      <h1>Music Profile</h1>
      <p>Name: {artist.name}</p>
      <p>Genre: {artist.genre}</p>
      <p>Albums: {artist.albums}</p>
      <p>Awards: {artist.awards.join(", ")}</p>
    </>
  )
}


const RecipeInformation = ()=>{
  const recipe = {

    name: "Spaghetti Bolognese",

    chef: {

      name: "Jamie Oliver",

      nationality: "British"

    },

    ingredients: ["Spaghetti", "Ground beef", "Tomato sauce", "Onion", "Garlic", "Herbs"],

    cookingTime: 45

  };

  return(
    <>
      <h1>Recipe Information</h1>
      <h2>Name: {recipe.name}</h2>
      <p>Chef: {recipe.chef.name} ({recipe.chef.nationality})</p>
      <p>Ingredients: {recipe.ingredients.join(", ")}</p>
      <p>Cooking Time: {recipe.cookingTime}</p>
    </>
  )
}


const MusicAlbum = ()=>{
  const album = {

    title: "Abbey Road",

    artist: {

      name: "The Beatles",

      nationality: "British"

    },

    releaseYear: 1969,

    genres: ["Rock", "Pop"]

  };

  return(
    <>
      <h1>Music Album</h1>
      <p>Title: {album.title}</p>
      <p>Artist : {album.artist.name} ({album.artist.nationality})</p>
      <p>Release Year: {album.releaseYear}</p>
      <p>Genres: {album.genres.join(", ")}</p>
    </>
  )
}


const LaptopDetails = ()=>{
  const laptop = {

    brand: "Apple",

    model: "MacBook Pro",

    screenSize: "13 inches",

    price: 1299.99,

    features: ["A15 Bionic chip", "Dual-camera system", "5G capable"]

  };

  return(
    <>
      <h1>Laptop Details</h1>
      <p>Brand: {laptop.brand}</p>
      <p>Model: {laptop.model}</p>
      <p>Screen Size: {laptop.screenSize}</p>
      <p>Price: {laptop.price}</p>
      <p>Features: {laptop.features.join(", ")}</p>
    </>
  )
}


function App() {
  return (
    <>
    <CarDetails/>
    <MusicProfile/>
    <RecipeInformation/>
    <MusicAlbum/>
    <LaptopDetails/>
      </>
  );
}

export default App;

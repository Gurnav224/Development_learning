/* eslint-disable react/prop-types */

const WelcomeBanner = ({recipe})=>{
  return <h1>Welcome to {recipe} App!</h1>
}


const RecipeDetails = ({recipe})=>{
  return(
    <>
      <h2>Recipe Details</h2>
      <p>Title: {recipe.title}</p>
      <p>Author: {recipe.author}</p>
      <p>Rating: {recipe.rating}</p>
    </>
  )
}

const MovieInformation = ({movie})=>{

  return(
    <>
    <h2>Movie Information</h2>
    <p>Title: {movie.title}</p>
    <p>Director: {movie.director}</p>
    <p>Release Date: {movie.releaseDate}</p>
    </>
  )
}

const ProductFeatures = ({product})=>{
  return(
    <>
      <h2>Product Features</h2>
      <p>Name: {product.name}</p>
      <p>Color: {product.color}</p>
      <p>Size: {product.size}</p>
    </>
  )
}


const UserProfileCard = ({name,email,role}) => {

  return(
    <>
    <h2>User Profile</h2>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
    <p>Role: {role}</p>
    </>
  )
}

const App = () => {
  const recipeData = {

    title: "Chocolate Cake",

    author: "Baker Betty",

    rating: 4.7,

  };

  const movieData = {

    title: "The Godfather",

    director: "Francis Ford Coppola",

    releaseDate: "March 24, 1972",

  };

  const productData = {

    name: "Smartwatch",

    color: "Black",

    size: "Medium",

  };



  return (
    <>
   <WelcomeBanner recipe="My Recipe" />
   <RecipeDetails recipe={recipeData} />
   <MovieInformation movie={movieData} />
   <ProductFeatures product={productData}/>
   <UserProfileCard  
   name="Alice" 
   email="alice@example.com" 
   role="Admin"

   />
    </>
  )
}

export default App

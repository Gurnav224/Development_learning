

const StudentDetails = ()=>{
  const name = "Bob";
  const age = 20;
  const grade = "A";
  return(
    <>
    <h1>Student Details</h1>
    <p>Name: {name}</p>
    <p>Age: {age}</p>
    <p>Grade: {grade}</p>
    </>
  )
}

const ProductDetails = ()=>{

  const proudct = {
    name:"Laptop",
    brand:"Dell",
    price:20000
  }

  return(
    <>
      <h1>Product Details</h1>
      <p>Name: {proudct.name}</p>
      <p>Brand: {proudct.brand}</p>
      <p>Price: {proudct.price}</p>
    </>
  )
}

const UserDetails = ()=>{
 const user = {
  name:"John Doe",
  age:30,
  address:{
    street:"123 Main",
    city:"New York",
    state:"CA",
    zipCode:"234543"
  }
 }
  return(
    <>
      <h1>User Details</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Address: {user.address.street} {user.address.city} {user.address.state} {user.address.zipCode}</p>
    </>
  )
}

const MovieDetails = ()=>{
  const movie = {
    title:"Inception",
    releaseYear:2018,
    director:{
      name:"Christopher Nolan",
      nationality:"British"
    },
    genre:["Sci-fi","Action","Thriller"]
  }

  return(
    <>
      <h1>Movie Details</h1>
      <p>Title: {movie.title}</p>
      <p>Release Year: {movie.releaseYear}</p>
      <p>Director: {movie.director.name} ({movie.director.nationality})</p>
      <p>Genre: {movie.genre.join(", ")}</p>
    </>
  )
}


function App() {
  return (
    <>
    <StudentDetails/>
    <ProductDetails/>
    <UserDetails/>
    <MovieDetails/>
    </>
  );
}

export default App;

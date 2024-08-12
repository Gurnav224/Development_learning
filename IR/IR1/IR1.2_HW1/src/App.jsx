
const BookInformation = () =>{
  const book = {

    title: "1984",

    author: "George Orwell",

    genre: "Dystopian Fiction",

    year: 1949,

  };
  return(
    <>
    <h1>Book Information</h1>
    <h2>Title: {book.title}</h2>
    <p>Author: {book.author}</p>
    <p>Genre: {book.genre}</p>
    <p>Year: {book.year}</p>
    </>
  )
}

const BlogDetails = ()=>{
  const blog = {

    title: "How to Start a Blog",

    author: "Jane Smith",

    date: "February 28, 2024",

    likes: 150,

  };
  return(
    <>
    <h1>Blog Details</h1>
    <h2>Title: {blog.title}</h2>
    <p>Author: {blog.author}</p>
    <p>Date: {blog.date}</p>
    <p>Likes: {blog.likes}</p>
    </>
  )
}


const MovieProfile = () =>{
  const movieProfile = {

    title: "The Shawshank Redemption",

    director: "Frank Darabont",

    rating: 9.3,

  };
  return(
    <>
      <h1>Movie Profile</h1>
      <h2>Title: {movieProfile.title}</h2>
      <p>Director: {movieProfile.director}</p>
      <p>Rating: {movieProfile.rating}</p>
    </>
  )
}

const ProductDetails = ()=>{
  const product = {

    name: "Smartphone",

    brand: "Samsung",

    price: 799.99,

  };


 

  return(
    <>
      <h1>Product Details</h1>
      <p>Name: {product.name}</p>
      <p>Brand: {product.brand}</p>
      <p>Price: {product.price}</p>
    </>
  )
}

const BookDetails = ()=>{
  const book = {

    title: "The Hitchhiker's Guide to the Galaxy",
  
    author: {
  
      name: "Douglas Adams",
  
      nationality: "British"
  
    },
  
    publicationYear: 1979,
  
    genres: ["Science Fiction", "Comedy"]
  
  };

  return(
    <>
      <h1>Book Details</h1>
      <h2>Title: {book.title}</h2>
      <p>Author: {book.author.name} ({book.author.nationality})</p>
      <p>PublicationYear: {book.publicationYear}</p>
      <p>Genre: {book.genres.join(", ")}</p>
    </>
  )
}


function App() {
  return (
    <>
    <BookInformation/>
    <BlogDetails/>
    <MovieProfile/>
    <ProductDetails/>
    <BookDetails/>
    </>
  );
}

export default App;

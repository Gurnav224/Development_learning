/* eslint-disable react/prop-types */


const WelcomeMessage = (props)=>{
  return <h1>Welcome {props.name} !</h1>
}

const BookDetails = (props)=>{

  return(
    <>
      <h1>Book Details</h1>
      <p>Title: {props.book.title}</p>
      <p>Author: {props.book.author}</p>
      <p>Genre: {props.book.genre}</p>
    </>
  )
}

const ArticleInformation = (props)=>{
 
  return(
    <>
      <h1>Article Information</h1>
      <p>Title: {props.article.title}</p>
      <p>Author: {props.article.author}</p>
      <p>PublishedDate: {props.article.publishedDate}</p>
    </>
  )
}


const ProductDetails = (props)=>{
  return(
    <>
      <h1>Product Details</h1>
      <p>Title: {props.product.name}</p>
      <p>Brand: {props.product.brand}</p>
      <p>Price: {props.product.price}</p>
    </>
  )
}


const EventDetails = (props)=>{
  return(
    <>
    <h1>Event Details</h1>
    <p>Title: {props.event.title}</p>
    <p>Location: {props.event.location}</p>
    <p>Date: {props.event.date}</p>
    </>
  )
}

const UserProfile = (props)=>{
  return(
  <>
  <h1>User Profile</h1>
  <p>name: {props.name}</p>
  <img src={props.src} alt={props.alt} />
  </>
  )
}

const App = () => {
  const bookData = {

    title: "To Kill a Mockingbird",

    author: "Harper Lee",

    genre: "Classic",

  };

  const articleData = {

    title: "The Power of Habit",

    author: "Charles Duhigg",

    publishedDate: "March 1, 2024",

  };

  const productData = {

    name: "Smartphone",

    brand: "Samsung",

    price: 799.99,

  };


  const eventData = {

    title: "Tech Conference 2024",

    location: "San Francisco",

    date: "April 15, 2024",

  };

  return (
    <>
    <WelcomeMessage name="Emily"/>
    <BookDetails book={bookData} />
    <ArticleInformation article={articleData} />
    <ProductDetails product={productData} />
    <EventDetails event={eventData} />
    <UserProfile name="Chris" src="https://placehold.co/150x150" alt="placehold" />
    </>
  )
}

export default App

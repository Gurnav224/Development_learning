/* eslint-disable react/prop-types */


const MovieDetails = ({movies , title}) =>{
  const movie = movies.find((movie) => movie.title === title);

  return(
    <div>
    <h1>Movie Details</h1>
      <h2>Title: {movie.title}</h2>
      <p>Director: {movie.director}</p>
      <p>Genre: {movie.genre}</p>
    </div>
  )
}

const CafeDetails = ({cafes , name}) =>{
  const cafe = cafes.find((cafe) => cafe.name === name);

  return(
    <div>
      <h1>Cafe Details</h1>
      <h2>Name: {cafe.name}</h2>
      <p>Location: {cafe.location}</p>
      <p>Rating: {cafe.rating}</p>
    </div>
  )
}

const PodcastDetails = ({podcasts  ,title }) =>{
  const podcast = podcasts.find((podcast)=>podcast.title === title);

  return(
    <div>
      <h1>Podcast Details</h1>
       <h2>Title: {podcast.title}</h2>
       <p>Host: {podcast.host}</p>
       <p>listeners: {podcast.listeners}</p>
    </div>
  )
}

const BookDetails = ({books , title}) =>{
  const book = books.find((book)=> book.title === title);

  return(
    <div>
      <h1>Book Data</h1>
      <h2>Title: {book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Pages: {book.pages}</p>
    </div>
  )
}

const ArticleDetails = ({articles, title}) =>{
  const article = articles.find((article) => article.title === title);

  return(
    <div>
      <h1>Article Details</h1>
      <h2>Title: {article.title}</h2>
      <p>Author: {article.author}</p>
      <p>category: {article.category}</p>
    </div>
  )
}

const BlogDetails = ({blogs, category}) =>{
  const blog = blogs.find((blog) => blog.category === category);

  return(
    <div>
      <h1>Blog Details</h1>
      <h2>Title: {blog.title}</h2>
      <p>content: {blog.content}</p>
      <p>category: {blog.category}</p>
    </div>
  )
}

const App = () => {
 
  const movies = [

    { title: "Movie 1", director: "Director 1", genre: "Action" },

    { title: "Movie 2", director: "Director 2", genre: "Comedy" },

    { title: "Movie 3", director: "Director 3", genre: "Drama" },

  ];


  const cafes = [

    { name: "Cafe 1", location: "Location 1", rating: 4.5 },

    { name: "Cafe 2", location: "Location 2", rating: 4.2 },

    { name: "Cafe 3", location: "Location 3", rating: 4.8 },

  ];

  const podcasts = [

    { title: "Podcast 1", host: "Host 1", listeners: 5000 },

    { title: "Podcast 2", host: "Host 2", listeners: 3000 },

    { title: "Podcast 3", host: "Host 3", listeners: 7000 },

  ];

  const books = [

    { title: "Book 1", author: "Author 1", pages: 300 },

    { title: "Book 2", author: "Author 2", pages: 250 },

    { title: "Book 3", author: "Author 3", pages: 400 },

  ];

  const articles = [

    { title: "Article 1", author: "Author 1", category: "Technology" },

    { title: "Article 2", author: "Author 2", category: "Food" },

    { title: "Article 3", author: "Author 3", category: "Fashion" },

  ];

  const blogPosts = [

    { id: 1, title: 'Blog Post 1', content: 'Content 1', category: 'Technology' },

    { id: 2, title: 'Blog Post 2', content: 'Content 2', category: 'Food' },

    { id: 3, title: 'Blog Post 3', content: 'Content 3', category: 'Technology' }

  ];

  

  return (
    <>
   <MovieDetails  movies={movies} title="Movie 2"/>
   <hr />
   <CafeDetails cafes={cafes}  name="Cafe 2"/>
   <hr />
   <PodcastDetails  podcasts={podcasts} title={"Podcast 3"}/>
    <hr />
    <BookDetails books={books} title={"Book 1"} />
    <hr />
    <ArticleDetails articles={articles}  title={"Article 2"}/>
    <hr />
    <BlogDetails blogs={blogPosts}  category={"Food"}/>
    </>
  )
}

export default App

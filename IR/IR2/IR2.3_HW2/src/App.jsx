/* eslint-disable react/prop-types */


const BlogDetails = ({blogs}) =>{
  const filterBlog = blogs.filter((blog)=>blog.category === "Food")
  const totalWords = filterBlog.reduce((total,blog)=>total + blog.content.split(' ').length , 0)
  return(
    <>
      <h1>Total words count for the food</h1>
      {totalWords}
    </>
  )
}

const LaptopDetails = ({laptops}) =>{

  const totalPrice = laptops.reduce((total,laptop) => total + laptop.price , 0)

  return(
    <>
      <h1>Total Price of laptops</h1>
      ${totalPrice}
    </>
  )
}

const CafeDetails = ({cafes}) => {
  
  const totalRating = cafes.reduce((total,cafe)=> total + cafe.rating , 0);
  
  const averageRating = totalRating / cafes.length;

  return(
    <>
      <h1>Average Rating Of Cafes</h1>
      {averageRating}
    </>
  )
}

const BookDetails = ({books}) =>{

  const totalPage = books.reduce((total, book) => total + book.pages , 0)

  return(
    <>
    <h1>Total Number of Page </h1>
    {totalPage}
    </>
  )
}

const TweetDetails  = ({tweets , schedule}) =>{
  const filterTweet = tweets.filter((tweet) => tweet.schedule === schedule );

const totalReTweet = filterTweet.reduce((total, tweet) => total + tweet.likes , 0)

  return(
    <>
      <h1>{schedule}  Like Count</h1>
      {totalReTweet}
    </>
  )
}

const PodcastList = ({podcasts}) =>{
  const filterPodcast = podcasts.filter((podcast) => podcast.type === 'verified');

const totalListener = filterPodcast.reduce((total,podcast)=> total + podcast.listeners , 0)
  return(
    <>
      <h1>Total Verified Listeners</h1>
      {totalListener}
    </>
  )
}

const App = () => {
  const blogPosts = [

    { id: 1, title: "Blog Post 1", content: "Content 1", category: "Technology"},

    { id: 2, title: "Blog Post 2", content: "Content 2", category: "Food" },

    { id: 3, title: "Blog Post 3", content: "Content 3", category: "Technology"},

    { id: 4, title: "Blog Post 4", content: "New content of food called Content 4", category: "Food"},

  ];

  const laptops = [

    { id: 1, brand: "Dell", price: 8999.99 },

    { id: 2, brand: "HP", price: 7999.99 },

    { id: 3, brand: "MacBook", price: 12999.99 },

  ];



  const cafes = [

    { id: 1, name: "Coffee House", rating: 4.5, type: "cafe" },

    { id: 2, name: "Cafe Latte", rating: 4.2, type: "cafe" },

    { id: 3, name: "Espresso Bar", rating: 4.8, type: "cafe" },

    { id: 3, name: "Me and U", rating: 4.3, type: "restaurant" },

  ];

  const books = [

    { id: 1, title: "Book 1", pages: 300 },

    { id: 2, title: "Book 2", pages: 250 },

    { id: 3, title: "Book 3", pages: 400 },

  ];

  const tweets = [

    { id: 1, content: "Tweet 1", likes: 20, schedule: "Morning tweet" },

    { id: 2, content: "Tweet 2", likes: 15, schedule: "Evening tweet" },

    { id: 3, content: "Tweet 3", likes: 30, schedule: "Morning tweet" },

{ id: 4, content: "Tweet 4", likes: 15, schedule: "Evening tweet" },

  ];

  const podcasts = [

    { id: 1, title: "Tech Talk", listeners: 5000, type: "verified" },

    { id: 2, title: "Science Insights", listeners: 1000, type: "unverified" },

    { id: 3, title: "Comedy Hour", listeners: 7000, type: "verified" },

  ];


  

  return (
    <>
    <BlogDetails blogs={blogPosts} />
    <LaptopDetails laptops={laptops} />
    <CafeDetails cafes={cafes} />
    <BookDetails books={books} />
    <TweetDetails tweets={tweets}  schedule={"Morning tweet"}/>
    <TweetDetails tweets={tweets}  schedule={"Evening tweet"}/>
    <PodcastList podcasts={podcasts} />
    </>
  )
}

export default App

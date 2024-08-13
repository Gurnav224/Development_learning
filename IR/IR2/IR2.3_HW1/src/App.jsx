/* eslint-disable react/prop-types */


const SmartphoneDetails = ({smartphones}) =>{
  const totalPrice = smartphones.reduce((total,currentSmartphone)=>total + currentSmartphone.price , 0)
  return(
    <>
      <h1>Total prices of all smartphone</h1>
      ${totalPrice.toFixed(2)}
    </>
  )
}

const HotelDetails = ({hotels}) =>{
const totalRating = hotels.reduce((total,currentHotel) => total + currentHotel.rating, 0)
const averageRating = totalRating / hotels.length
  return(
    <>
  <h1>Average rating of hotel</h1>
  <p>{averageRating.toFixed(2)}</p>
    </>
  )
}

const PodcastDetails = ({podcasts}) =>{
  const totalListener = podcasts.reduce((total,currentPodcast) => total + currentPodcast.listeners , 0)

  return(
    <>
      <h1>Total Number of listeners</h1>
      <p>{totalListener}</p>
    </>
  )
}

const TweetDetails = ({tweets}) =>{
  const totalReTweet = tweets.reduce((total,tweet)=>total + tweet.retweets , 0);
  return(
    <>
      <h1>Total Number of Re-Tweets</h1>
      {totalReTweet}
    </>
  )
}

const ArticleDetails = ({articles}) =>{
  const totalWord = articles.reduce((total, article) => total + article.content.split(' ').length , 0)

  return(
    <>
      <h1>Total Content word count of all articles</h1>
      {totalWord}
    </>
  )
}

const PostDetails = ({posts}) => {
  const filterPost = posts.filter((post) => post.user === "User1");
  console.log(filterPost)
  const totalLikes = filterPost.reduce((total,post) =>  total + post.likes, 0)
  return(
    <>
      <h1>Total number of likes of User 1</h1>
      {totalLikes}
    </>
  )
}

const App = () => {
  const smartphones = [

    { id: 1, brand: "Samsung", price: 799.99 },

    { id: 2, brand: "iPhone", price: 999.99 },

    { id: 3, brand: "Google Pixel", price: 899.99 },

  ];

  const hotels = [

    { id: 1, name: "Luxury Hotel", rating: 4.8 },

    { id: 2, name: "Budget Inn", rating: 3.5 },

    { id: 3, name: "Resort Paradise", rating: 4.2 },

  ];

  const podcasts = [

    { id: 1, title: "Tech Talk", listeners: 5000 },

    { id: 2, title: "Science Insights", listeners: 3000 },

    { id: 3, title: "Comedy Hour", listeners: 7000 },

  ];

  const tweets = [

    { id: 1, content: "Tweet 1", retweets: 20 },

    { id: 2, content: "Tweet 2", retweets: 15 },

    { id: 3, content: "Tweet 3", retweets: 30 },

  ];

  const articles = [

    { id: 1, title: "Article 1", content: "Content 1" },

    { id: 2, title: "Article 2", content: "Content 2" },

    { id: 3, title: "Article 3", content: "Content 3" },

  ];

  const posts = [

    { id: 1, title: "Post 1", content: "Content 1", likes: 10, user: "User1" },

    { id: 2, title: "Post 2", content: "Content 2", likes: 5, user: "User2" },

    { id: 3, title: "Post 3", content: "Content 3", likes: 7, user: "User1" },

  ];



  return (
    <>
      <SmartphoneDetails smartphones={smartphones}/>
      <HotelDetails hotels={hotels} />
      <PodcastDetails podcasts={podcasts} /> 
      <TweetDetails tweets={tweets} />
      <ArticleDetails articles={articles} />
      <PostDetails posts={posts} />
    </>
  )
}

export default App

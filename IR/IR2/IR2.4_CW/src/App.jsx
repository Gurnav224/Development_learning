


const ProductDetails = ({products , productId}) =>{
  const product = products.find((product)=>product.id===productId)

  return(
    <>
      <h1>Product Data</h1>
      <p>Id: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
    </>
  )
}


const RestaurantDetails = ({restaurants, restaurantId}) => {
  const restaurant = restaurants.find((restaurant)=>restaurant.id===restaurantId)
  
  return(
    <div>
      <h1>Restaurant Details</h1>
      <p>Id: {restaurant.id}</p>
      <p>Name: {restaurant.name}</p>
      <p>Cusine: {restaurant.cuisine}</p>
      <p>Rating: {restaurant.rating}</p>
    </div>
  )
}

const VideoDetails = ({videos, videoId}) => {
   const video = videos.find((video)=>video.id === videoId)
  return(
    <>
      <h2>Video Info</h2>
      <p>Title: {video.title}</p>
      <p>Views: {video.views}</p>
    </>
  )
}


const App = () => {
 
  const products = [
    {
      id:1,
      name:'Product 1',
      price:19.99
    },
    {
      id:2,
      name:'Product 1',
      price:29.99
    },
    {
      id:3,
      name:'Product 1',
      price:39.99
    },
  ]

  const restaurants = [
    {
      id:1,
      name:'Restaurants 1',
      cuisine:'Italian',
      rating:5
    },
    {
      id:2,
      name:'Restaurants 2',
      cuisine:'Mexican',
      rating:3.5
    },
    {
      id:3,
      name:'Restaurants 3',
      cuisine:'Chinese',
      rating:2.7
    },
  ]

  const videos = [
    {
      id:1,
      title:'Video 1',
      views:1000
    },
    {
      id:2,
      title:'Video 2',
      views:2000
    },
    {
      id:3,
      title:'Video 3',
      views:3000
    },

  ]


  

  return (
    <>
    <ProductDetails products={products} productId={2} />
    <hr />
    <RestaurantDetails restaurantId={2} restaurants={restaurants} />
    <hr />
    <VideoDetails videos={videos}  videoId={2}/>
    </>
  )
}

export default App

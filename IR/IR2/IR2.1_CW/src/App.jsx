/* eslint-disable react/prop-types */



const ProductList = ({products}) =>{
  const productListing = products.map((product)=>(
    <div key={product.id}>
      <h3>Name: {product.name}</h3>
      <p>Price: {product.price}</p>
    </div>
  ))
  return(
    <>
    <h2>Products</h2>
    {productListing}
    </>

  )
}

const RestaurantList = ({restaurants})=>{
  const restaurantListing = restaurants.map((restaurant)=>( 
    <div key={restaurant.id}>
      <h3>Name: {restaurant.name}</h3>
      <p>Cusisine: {restaurant.cuisine}</p>
    </div>
   ))
  return(
    <>
      <h2>Restaurant</h2>
      {restaurantListing}
    </>
  )
}

const VideoList = ({videos})=>{
  const videoListing = videos.map((video)=>(
    <div key={video.id}>
      <h3>Title: {video.title}</h3>
      <p>Video: {video.views}</p>
    </div>
  ))
  return(
    <>
      <h2>Videos</h2>
      {videoListing}
    </>
  )
}

function App() {
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
      cuisine:'Italian'
    },
    {
      id:2,
      name:'Restaurants 2',
      cuisine:'Mexican'
    },
    {
      id:3,
      name:'Restaurants 3',
      cuisine:'Chinese'
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
    <ProductList products={products} />
    <hr />
    <RestaurantList restaurants={restaurants} />
    <hr />
    <VideoList videos={videos} />
    </>
  )
}

export default App

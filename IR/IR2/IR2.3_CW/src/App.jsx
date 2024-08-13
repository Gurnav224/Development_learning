/* eslint-disable react/prop-types */


const ProductList = ({products}) =>{

const totalPrice = products.reduce((total,currentProduct)=>total+currentProduct.price,0)
 
  return(
    <>
    <h1>Total Price Of Products</h1>
    ${totalPrice}
    </>

  )
}

const RestaurantList = ({restaurants})=>{

  const totalRating = restaurants.reduce((total,currentRestaurant)=>total + currentRestaurant.rating , 0);

  const averageRating = totalRating / restaurants.length
 
  return(
    <>
    <h1>Total Rating Of Restaurants</h1>
    {totalRating}

    <h1>Average Rating of Restaurants</h1>
    {averageRating.toFixed(2)}
    </>
  )
}

const VideoList = ({videos})=>{
  const totalViews = videos.reduce((total,video)=>total + video.views,0);

  return(
    <>
    <h1>Total Views of Videos</h1>
    {totalViews}
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
    <ProductList products={products} />
    <hr />
    <RestaurantList restaurants={restaurants} />
    <hr />
    <VideoList videos={videos} />
    </>
  )
}

export default App

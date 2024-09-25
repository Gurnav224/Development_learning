/* eslint-disable react/prop-types */
import useFetch from "../useFetch"

const HotelByTitle = ({title}) => {
const {data , loading, error} = useFetch(`https://hotel-backend-mu.vercel.app/hotels/${title}`,{});


const hotel = data?.hotel;

if(error) return <p>error: {error}</p>
  return hotel ? (
    <div>
    <h2>{hotel.name}</h2>
    <p><strong>Location: </strong>{hotel.location}</p>
    <p><strong>Rating: </strong>{hotel.rating}</p>
    <p><strong>Price Range: </strong>{hotel.priceRange}</p>
    </div>
  ):(
    loading && <p>loading.............</p>
  )
}

export default HotelByTitle

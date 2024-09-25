import useFetch from "../useFetch"

const Hotels = () => {
    const {data , loading, error} = useFetch('https://hotel-backend-mu.vercel.app/hotels',[]);


    const hotels = data?.hotels;

    const deleteHotel = async (hotelId) => {
      try {
        const response  = await fetch(`https://hotel-backend-mu.vercel.app/hotels/${hotelId}`,{
          method:'DELETE'
        });

        if(!response.ok) {
          throw Error('Network error')
        }

        const data = await response.json();

        if(data){
          console.log('hotel data deleted successfully',data)
          window.location.reload()
        }

      } catch (error) {
        console.error('failed to delete hotel',error)
      }
    }


    if (error) return <p>error  {error}</p>

  return hotels ?  (
    <div>
      <h1>All Hotels</h1>
        <ul>
            {
                hotels.map((hotel) => (
                    <li key={hotel._id}>
                        {hotel.name}
                        {" "}
                        <button onClick={() => deleteHotel(hotel._id)}>delete</button>
                    </li>
                ))
            }
        </ul>
    </div>
  ):(
    loading && <p>{loading}</p>
  )
}

export default Hotels

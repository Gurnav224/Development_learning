import useFetch from "../useFetch"

const Hotels = () => {
    const {data , loading, error} = useFetch('https://hotel-backend-txrt.onrender.com/hotels',[]);


    const hotels = data?.hotels;


    if (error) return <p>error  {error}</p>

  return hotels ?  (
    <div>
      <h1>All Hotels</h1>
        <ul>
            {
                hotels.map((hotel) => (
                    <li key={hotel._id}>
                        {hotel.name}
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

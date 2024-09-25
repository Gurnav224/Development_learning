import AddNewHotel from "./components/AddNewHotel"
import HotelByTitle from "./components/HotelByTitle"
import Hotels from "./components/Hotels"

function App() {

  return (
    <>
    <AddNewHotel/>
      <Hotels/>
      <HotelByTitle title={"New Hotel 1"} />
    </>
  )
}

export default App

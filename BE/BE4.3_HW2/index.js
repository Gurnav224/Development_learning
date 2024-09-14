const {initializeDatabase} = require('./config/db.connect');
const Hotel = require('./models/hotel.model');
const express = require('express');


initializeDatabase();

const app = express();



app.use(express.json());

async function createHotel(hotel){
  try {
    const newHotel = new Hotel(hotel);
    const savedHotel = await newHotel.save();
    return savedHotel
  } catch (error) {
    throw error
  }
}


app.post('/hotels', async (req ,res) => {
  try {
    const hotel = await createHotel(req.body);
    res.status(201).json({
      message:'new hotel created successfully',
      newHotel:hotel
    })
  } catch (error) {
    res.status(500).json({error:'error to add new hotel'})
  }
})

//   find all hotels from the .

async function getAllHotels(){
  try {
    const hotels = await Hotel.find({});
    return hotels
  } catch (error) {
    throw error
  }
}


app.get('/hotels', async (req , res) => {
  try {
    const hotels = await  getAllHotels();

    if(hotels.length !== 0){
      res.status(200).json({
        message:"get all hotels",
        hotels:hotels
      })
    }
    else{
      res.status(404).json({error:'hotel not found'})
    }

  } catch (error) {
    res.status(500).json({error:'failed to get hotel'})
  }
})


// read a hotel by its name ("Lake View").


async function getHotelByName(hotelName){
  try {
    const hotel  = await Hotel.findOne({name:hotelName});
    return hotel
  } catch (error) {
    throw error
  }
}

app.get('/hotels/:hotelName', async (req, res) => {
  const {hotelName} = req.params;
  try {
    const hotel = await getHotelByName(hotelName);
    if(hotel){
      res.status(200).json({
        message:'Hotel get by name successfully',
        hotel:hotel
      })
    }
    else{
      res.status(404).json({error:'hotel not found'})
    }
  } catch (error) {
    res.status(500).json({error:'failed to get hotel'})
  }
})



// find hotel by phone number

async function getHotelByPhoneNumber(phoneNumber){
  try {
    const hotels = await Hotel.find({phoneNumber:phoneNumber});
    return hotels
  } catch (error) {
    throw error
  }
}


app.get("/hotels/directory/:phoneNumber", async (req, res) => {
  const {phoneNumber} = req.params
  try {
    const hotels = await getHotelByPhoneNumber(phoneNumber);

    if(hotels.length !== 0){
      res.status(200).json({
        message:'hotel by phone number',
        hotels:hotels
      })
    }
    else[
      res.status(404).json({error:'hotel not found'})
    ]
  } catch (error) {
    res.status(500).json({message:'failed to get hotels'})
  }
})




// find all hotels by rating 


async function getHotelsByRating(rating){
  try {
    const hotels = await Hotel.find({rating:rating});
    return hotels
  } catch (error) {
    throw error
  }
}



app.get('/hotels/ratings/:hotelRating', async (req, res) => {
  const {  hotelRating } = req.params;
  try {
    const hotels = await getHotelsByRating(hotelRating);

    if(hotels.length !== 0){
      res.status(200).json({
        message:'get hotel by rating successfully',
        hotels:hotels
      })
    }
    else{
      res.status(404).json({
        message:'Hotel not found'
      })
    }

  } catch (error) {
    res.status(500).json({error:'failed to get hotels'})
  }
})

// find all hotels by category


async function getHotelsByCategory(category){
  try {
    const hotels = await Hotel.find({category:category});
    return hotels
  } catch (error) {
    throw error
  }
}


app.get('/hotels/category/:hotelCategory', async (req, res) => {
  const {hotelCategory} = req.params;
  try {
    const hotels = await getHotelsByCategory(hotelCategory);

    if(hotels){
      res.status(200).json({
        message:'get hotel by category',
        hotels:hotels
      })
    }
    else{
      res.status(404).json({
        error:'Hotel not found'
      })
    }

  } catch (error) {
    res.status(500).json({error:'failed to get hotels'})
  }
})


// hotel deleted by id 
async function deleteHotel(hotelId) {
  try {
    const hotel = await Hotel.findByIdAndDelete(hotelId);
    return hotel
  } catch (error) {
    throw error
  }
}



app.delete('/hotels/:hotelId', async (req, res) => {
  const {hotelId} = req.params
  try {
    const hotel = await deleteHotel(hotelId);
    
    if(hotel){
      res.status(200).json({message:'hotel deleted successfully',deleted:hotel})
    }
    else{
      res.status(404).json({error:"Hotel not found"})
    }

  } catch (error) {
    res.status(500).json({error:"failed to delete hotel"})
  }
})

const PORT = 3000;


app.listen(PORT, ()=>{
  console.log(`server started at http://localhost:${PORT}`)
})
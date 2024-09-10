const {initializeDatabase} = require('./config/db.connect');
const Hotel = require('./models/hotel.model')

initializeDatabase();

// add new hotel
const newHotel = {
  name: "Lake View",
  category: "Mid-Range",
  location: "124 Main Street, Anytown",
  rating: 3.2,
  reviews: [],
  website: "https://lake-view-example.com",
  phoneNumber: "+1234555890",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  amenities: ["Laundry", "Boating"],
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isParkingAvailable: false,
  isWifiAvailable: true,
  isPoolAvailable: false,
  isSpaAvailable: false,
  isRestaurantAvailable: false,
  photos: ["https://example.com/hotel1-photo1.jpg", "https://example.com/hotel1-photo2.jpg"],
};


const newHotel2 = {
  name: "Sunset Resort",
  category: "Resort",
  location: "12 Main Road, Anytown",
  rating: 4.0,
  reviews: [],
  website: "https://sunset-example.com",
  phoneNumber: "+1299655890",
  checkInTime: "2:00 PM",
  checkOutTime: "11:00 AM",
  amenities: ["Room Service", "Horse riding", "Boating", "Kids Play Area", "Bar"],
  priceRange: "$$$$ (61+)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: true,
  isSpaAvailable: true,
  isRestaurantAvailable: true,
  photos: ["https://example.com/hotel2-photo1.jpg", "https://example.com/hotel2-photo2.jpg"],
};



async function createHotel(hotel){
  try {
    const newHotel = new Hotel(hotel);
    const savedHotel = await newHotel.save();

    console.log('new hotel created successfully , ', savedHotel)
  } catch (error) {
    throw error
  }
}


// createHotel(newHotel2)



// 3.  read all hotels from the database.

async function getAllHotels(){
  try {
    const hotels = await Hotel.find();
    console.log('retrieve all  hotels  from database , ',hotels)
  } catch (error) {
    throw error
  }
}


// getAllHotels()


// read a hotel by its name ("Lake View").


async function getHotelByName(hotelName){
  try {
    const hotel  = await Hotel.findOne({name:hotelName});
    console.log('hotel by name:  ',hotel)
  } catch (error) {
    throw error
  }
}


// getHotelByName('Lake View')


// read all hotels which offers parking space

async function getHotelParkingAvailable(isParking){
  try {
    const hotels = await Hotel.find({isParkingAvailable:isParking})
    console.log('Hotels having parking Available',hotels)
  } catch (error) {
    throw error
  }
}
// getHotelParkingAvailable(true)


// read all hotels which has restaurant available.

async function getHotelHaveRestaurant(available){
try {
  const hotels = await Hotel.find({isRestaurantAvailable:available});
  console.log("hotels having restaurants available ",hotels)
} catch (error) {
  throw error
}
}


// console.log(getHotelHaveRestaurant(true))


// read all hotels by category


async function getHotelsByCategory(category){
  try {
    const hotels = await Hotel.find({category:category});
    console.log("all hotels by category ",hotels)
  } catch (error) {
    throw error
  }
}


// getHotelsByCategory("Mid-Range")


// read all hotels by price range 


async function getHotelsByPrice(priceRange){
  try {
    const hotels = await Hotel.find({priceRange:priceRange});
    console.log('all hotels by Price Range',hotels)
  } catch (error) {
    throw error
  }
}

// getHotelsByPrice("$$$$ (61+)")


// read all hotels with 4.0 rating


async function getHotelsByRating(rating){
  try {
    const hotels = await Hotel.find({rating:rating});
    console.log('all hotels by rating : ',hotels)
  } catch (error) {
    throw error
  }
}


// getHotelsByRating("4.0")

async function getHotelByPhoneNumber(phoneNumber){
  try {
    const hotels = await Hotel.find({phoneNumber:phoneNumber});
    console.log("get all hotels by phone number",hotels)
  } catch (error) {
    throw error
  }
}

// getHotelByPhoneNumber("+1299655890")


//function to  update hotel by ID

async function updateHotelById(hotelId,dataToUpdate){
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(hotelId,dataToUpdate,{new:true});

    console.log('Hotel successfully updated by ID',updatedHotel)

  } catch (error) {
    console.error('getting error while updating hotel by ID',error)
  }
} 

// updateHotelById("66e00025cfb9ac19b040728d",{checkOutTime:"12 AM"})


// function to update hotel by Name;

async function updateHotelByName(hotelName,dataToUpdate){
  try {
    const updatedHotel = await Hotel.findOneAndUpdate({name:hotelName},dataToUpdate,{new:true});

    console.log(' hotel successfully updated by name : ',updatedHotel)

  } catch (error) {
    console.error('getting error to updating hotel by name',error)
  }
}

// updateHotelByName("Sunset Resort" ,{rating:4.2})

// function to update the hotel by  phone number

async function updateHotelByPhoneNumber(phoneNumber,dataToUpdate){
  try {
    const updatedHotel = await Hotel.findOneAndUpdate({phoneNumber:phoneNumber},dataToUpdate,{new:true});

    console.log("hotel successfully updated by phone" , updatedHotel)

  } catch (error) {
    console.error('getting error updating hotely by name: ',error)
  }
}

updateHotelByPhoneNumber("+1299655890",{phoneNumber:"+1997687392"})
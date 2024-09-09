const {initializeDatabase} = require('./config/db.connect');
const Hotel = require('./models/hotel.model')

initializeDatabase();




const newHotel = {
  name: "New Hotel",
  category: "Mid-Range",
  location: "123 Main Street, Frazer Town",
  rating: 4.0,
  reviews: [],
  website: "https://hotel-example.com",
  phoneNumber: "+1234567890",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  amenities: ["Laundry", "Room Service"],
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: false,
  isSpaAvailable: false,
  isRestaurantAvailable: true,
  photos: ["https://example.com/hotel-photo1.jpg", "https://example.com/hotel-photo2.jpg"],
};



const boutiqueHotel = {
  name: "Artisan Boutique",
  category: "Boutique",
  location: "321 Art District, Creative City",
  rating: 4.8,
  reviews: ['User 1','User 2','User 3'],
  website: "https://artisanboutique-example.com",
  phoneNumber: "+9988776655",
  checkInTime: "4:00 PM",
  checkOutTime: "11:00 AM",
  amenities: ["Art Gallery", "Room Service", "Free Breakfast"],
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isParkingAvailable: true,
  isWifiAvailable: true,
  isPoolAvailable: false,
  isSpaAvailable: true,
  isRestaurantAvailable: true,
  photos: ["https://example.com/boutique-hotel1.jpg", "https://example.com/boutique-hotel2.jpg"],
};



async function seedHotelData(hotel){
  try {
    const newHotel =  new Hotel(hotel);
    const savedHotel =  await newHotel.save();
    console.log("newly added hotel successfully",savedHotel)
  } catch (error) {
    console.error('error to added new hotel',error )
  }
}

// seedHotelData(newHotel)

seedHotelData(boutiqueHotel)
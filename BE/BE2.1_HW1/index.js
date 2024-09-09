const {initializeDatabase} = require('./config/db.connect');
 const Restaurant = require('./models/restaurant.model');


 initializeDatabase();



 const newRestaurant = {
    name: "Cha Cha",
    cuisine: ["Spanish"],
    location: "123 Main Street, Anytown",
    rating: 4.0,
    reviews: [],
    website: "https://example.com",
    phoneNumber: "+1234567890",
    openHours: "Mon-Sun: 11:00 AM - 10:00 PM",
    priceRange: "$$ (11-30)",
    reservationsNeeded: true,
    isDeliveryAvailable: true,
    menuUrl: "https://example.com/menu",
    photos: ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"],
  };


 

  async function seedRestaurantData(restaurant){
    try {
        const newRestaurant =  new Restaurant(restaurant);
        const savedRestaurant = await newRestaurant.save();
        console.log('saved Restaurant ',savedRestaurant) 
    } catch (error) {
        console.error('error to seed restaurant',error)
    }
  }


//   seedRestaurantData(newRestaurant)

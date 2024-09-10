const { ConnectionStates } = require('mongoose');
const {initializeDatabase} = require('./config/db.connect');
 const Restaurant = require('./models/restaurant.model');


 initializeDatabase();
 const newRestaurant = {
  name: "Somi",
  cuisine: ["Greek"],
  location: "11 Main Road, Gem",
  rating: 4.3,
  reviews: [],
  website: "https://somi-example.com",
  phoneNumber: "+1234997390",
  openHours: "Tue-Sun: 11:00 AM - 10:00 PM",
  priceRange: "$$ (11-30)",
  reservationsNeeded: false,
  isDeliveryAvailable: true,
  menuUrl: "https://somi-example.com/menu",
  photos: ["https://example.com/somi-photo1.jpg", "https://example.com/somi-photo2.jpg"],
};


const newRestaurant2 = {
  name: "Yo China",
  cuisine: ["Chinese", "Italian"],
  location: "MG Road, Bangalore",
  rating: 3.9,
  reviews: [],
  website: "https://yo-example.com",
  phoneNumber: "+1288997392",
  openHours: "Tue-Sun: 10:00 AM - 11:00 PM",
  priceRange: "$$$ (31-60)",
  reservationsNeeded: true,
  isDeliveryAvailable: false,
  menuUrl: "https://yo-example.com/menu",
  photos: ["https://example.com/yo-photo1.jpg", "https://example.com/yo-photo2.jpg", "https://example.com/yo-photo3.jpg"]
};



 //  function to create a new restaurant ;


 async function createRestaurant(restaurant){
  try {
    const newRestaurant = new Restaurant(restaurant);
    const savedRestaurant = await newRestaurant.save();
    console.log("new restaurant added successfully",savedRestaurant)
  } catch (error) {
    throw error
  }
 }

//  createRestaurant(newRestaurant)
// createRestaurant(newRestaurant2)


// find all the restaurants from the database

async function getAllRestaurant(){
  try {
    const restaurants = await Restaurant.find({});
    console.log('all the restaurants retrieved from db',restaurants)
  } catch (error) {
    throw error
  }
}

// getAllRestaurant()



// get restaurant by the name;

async function getRestaurantByName(name){
  try {
    const restaurant = await Restaurant.findOne({name:name});
    console.log('restaurant by name ,',restaurant);

  } catch (error) {
    throw error
  }
}


// getRestaurantByName("New Restaurant")
// getRestaurantByName("Cha Cha")



// to read all restaurants which offers reservations

async function getAllRestaurantByOffersReservations(available){
  try {
    const restaurants = await Restaurant.find({reservationsNeeded:available});
    console.log("all restaurants by reservation",restaurants)
  } catch (error) {
    throw error
  }
}

// getAllRestaurantByOffersReservations(true)


// read all restaurants which offers delivery


async function getRestaurantsOfferDelivery(available){
  try {
    const restaurants = await Restaurant.find({isDeliveryAvailable:available});
    console.log('all restaurants that offers restaurant delivery: ',restaurants)
  } catch (error) {
    throw error
  }
}


// getRestaurantsOfferDelivery(true)


// to read a restaurant by phone number


async function getRestaurantByPhoneNumber(phoneNumber){
  try {
    const restaurant =  await Restaurant.find({phoneNumber:phoneNumber});
    console.log('get restaurnat by phone number',restaurant)
  } catch (error) {
    throw error
  }
}


//  getRestaurantByPhoneNumber("+1288997392")


//  read all restaurants by cuisine 


async function getAllRestaurantByCuisine(cuisineName){
  try {
    const restaurants = await Restaurant.find({cuisine:cuisineName});
    console.log('all restaurants by cuisine ',restaurants)
  } catch (error) {
    throw error
  }
}

// getAllRestaurantByCuisine("Italian")


// restaurant update by id ;

async function updateRestaurantById(restaurantId,dateToUpdate){
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(restaurantId,dateToUpdate,{new:true});
    console.log('restaurant to update: ',updatedRestaurant)
  } catch (error) {
    console.error('error updating to restaurant: ',error)
  }
}

// updateRestaurantById("66dff00ae45db5231df02190",{rating:4.1})



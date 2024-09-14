const {initializeDatabase} = require('./config/db.connect');
 const Restaurant = require('./models/restaurant.model');
const express = require('express')

 initializeDatabase();

 const app = express()

 app.use(express.json())

 // . Create an API with route "/restaurants" to create a new restaurant data in the Database. 

 async function createRestaurant(restaurant){
  try {
    const newRestaurant = new Restaurant(restaurant);
    const savedRestaurant = await newRestaurant.save();
    return savedRestaurant;
  } catch (error) {
    throw error
  }
 }

 app.post('/restaurants', async ( req , res) => {
  try {
    const restaurant = await createRestaurant(req.body);
    res.status(201).json({message:'new restaurant created successfully',newRestaurant:restaurant})
  } catch (error) {
    res.status(500).json({error:'failed to add new restaurant'})
  }
 })

// find all the restaurants from the database

async function getAllRestaurant(){
  try {
    const restaurants = await Restaurant.find({});
    return restaurants
  } catch (error) {
    throw error
  }
}

// getAllRestaurant()

app.get('/restaurants', async (req ,res) => {
  try {
    const restaurants = await getAllRestaurant();

    if(restaurants.length !== 0){
      res.status(200).json({message:'get all restaurants successfully',restaurants:restaurants})
    }
    else{
      res.status(404).json({error:'Restaurants not found'})
    }
  } catch (error) {
    res.status(500).json({error:'failed to fetch restaurants'})
  }
})



// get restaurant by the name;

async function getRestaurantByName(name){
  try {
    const restaurant = await Restaurant.findOne({name:name});
    return restaurant
  } catch (error) {
    throw error
  }
}


app.get('/restaurants/:restaurantName', async (req , res) => {
  const { restaurantName } = req.params
  try {
    const restaurant = await getRestaurantByName(restaurantName);

    if(restaurant){
      res.status(200).json({message:'get restaurant by name successfully',restaurant:restaurant})
    }
    else{
      res.status(404).json({message:'Restaurant not Found'})
    }

  } catch (error) {
    res.status(500).json({error:'failed to get Restaurant'})
  }
})




// to read a restaurant by phone number


async function getRestaurantByPhoneNumber(phoneNumber){
  try {
    const restaurant =  await Restaurant.find({phoneNumber:phoneNumber});
    return restaurant
  } catch (error) {
    throw error
  }
}

app.get('/restaurants/directory/:phoneNumber',async (req, res) => {
  const {phoneNumber} = req.params
  try {
    const restaurants = await getRestaurantByPhoneNumber(phoneNumber);

    if(restaurants.length !== 0){
      res.status(200).json({message:'get restaurant by phone number',restaurants:restaurants})
    }
    else{
      res.status(404).json({erro:'Restaurant not found'})
    }
  } catch (error) {
   res.status(500).json({error:'failed to fetch restaurant'}) 
  }
})




//  read all restaurants by cuisine 


async function getAllRestaurantByCuisine(cuisineName){
  try {
    const restaurants = await Restaurant.find({cuisine:cuisineName});
    return restaurants
  } catch (error) {
    throw error
  }
}

app.get('/restaurants/cuisine/:cuisineName', async (req , res) => {
  const {cuisineName} = req.params
  try {
    const restaurants = await getAllRestaurantByCuisine(cuisineName);

    if(restaurants.length !== 0){
      res.status(200).json({message:'get all by cuisine name',restaurants:restaurants})
    }
    else{
      res.status(404).json({message:"Restaurant not Found"})
    }
  } catch (error) {
    res.status(500).json({error:'failed to fetch restaurant'})
  }
})


// find restaurants by the location 
async function getRestaurantsByLocation(restaurantLocation) {
  try {
    const restaurant = await Restaurant.find({location:restaurantLocation});
    return restaurant
  } catch (error) {
    throw error
  }
}


app.get('/restaurants/location/:restaurantLocation', async (req, res)=> {
  const {restaurantLocation} = req.params;
  try {
    const restaurants = await getRestaurantsByLocation(restaurantLocation);
  
    if(restaurants !== 0){
      res.status(200).json({message:"restaurant by location",restaurants:restaurants})
    }
    else{
      res.status(404).json({error:'Restaurant not found'})
    }

  } catch (error) {
    res.status(500).json({error:'failed to fetch restaurant'})
  }
})


const PORT = 3000;


app.listen(PORT, ()=>{
  console.log(`server started at http://localhost:${PORT}`)
})
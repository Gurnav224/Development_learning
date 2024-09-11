const {initializeDatabase } = require('./config/db.connect');
const Car = require('./models/cars.model')

initializeDatabase();

// 1.
const carDataOne = {
    brand: "Ford",
    model: "Mustang",
    year: 2019,
    bodyStyle: "Convertible",
    fuelType: "Gasoline",
    transmission: "Automatic",
    engine: "5.0L V8",
    mileage: 25000,
    color: "Red",
    price: 3500000,
    condition: "Used",
    description: "Exciting Ford Mustang convertible with powerful V8 engine.",
    photos: [
      "https://example.com/mustang-photo1.jpg",
      "https://example.com/mustang-photo2.jpg",
      "https://example.com/mustang-photo3.jpg"
    ]
  };


  //2. 
  const carDataTwo = {
    brand: "Honda",
    model: "Civic",
    year: 2018,
    bodyStyle: "Coupe",
    fuelType: "Gasoline",
    transmission: "Manual",
    engine: "1.5L Turbocharged Inline-4",
    mileage: 40000,
    color: "Black",
    price: 1800000,
    condition: "Used",
    description: "Sporty Civic coupe with low mileage and manual transmission.",
    photos: [
      "https://example.com/civic-photo1.jpg",
      "https://example.com/civic-photo2.jpg",
      "https://example.com/civic-photo3.jpg"
    ]
  };



  async function createHotel(car){
    try {
        const newHotel =  new Car(car);
        const savedHotel = await newHotel.save();

        console.log('new car added successfully',savedHotel)

    } catch (error) {
        console.error('error to added new car ',error)
    }
  }

//   createHotel(carDataOne)
//   createHotel(carDataTwo)

  //3.

  //  read all cars from the database.

  async function getAllCars(){
    try {
        const allCars = await Car.find({});

        console.log('all cars from db',allCars)

    } catch (error) {
        console.error('getting error while retrieve data from db',error)
    }
  }

//   getAllCars()

// 4. read car by brand
async function getCarByBrand(brand){
    try {
        const cars = await Car.find({brand:brand});

        console.log('all cars by brand',cars)
    } catch (error) {
        console.error('Error to found car by brand',error)
    }
}

// getCarByBrand("Ford")
// getCarByBrand("Tesla")


//5. read cars by color


async function getCarByColor(color){
    try {
        const cars = await Car.find({color:color});

        console.log('all cars by color',cars)

    } catch (error) {
        console.error('Error to found car by color',error)
    }
}


// getCarByColor("Black")

// 6.  find the car by model and update the  price;

async function updatedCarByModel(model , dataToUpdate){
    try {
        const car = await Car.findOneAndUpdate({model:model},dataToUpdate,{new:true});

        console.log('car updated successfully ',car)
    } catch (error) {
        console.error('error to update car by model',error)
    }
}

// updatedCarByModel("Corolla",{price:2300000})


// 7. function to update the condition of a car with model;

async function updateCarByCondition(model,dataToUpdate){
    try {
        const car = await Car.findOneAndUpdate({model:model},dataToUpdate,{new:true});

        console.log('car updated successfully ',car)

    } catch (error) {
        console.error('error to update car by model',error)
    }
}

// updateCarByCondition("Model S",{condition:"Used"})


// 8. find car by id and delete it from the database;

async function deleteCarById(carId){
    try {
        const car = await Car.findByIdAndDelete(carId);

        if(car){
            console.log('car deleted by id successfully',car)
        }
        else{
            console.log('car not found in database')
        }

    } catch (error) {
        console.error('error deleted car by Id',error)
    }
}


// deleteCarById("66deb4f50e03308d2231841d")

// 9.  delete car by its bodystyle


async function deleteCarByBodyStyle(bodyStyle){
    try {
        const car = await Car.findOneAndDelete({bodyStyle:bodyStyle})

        if(car){
            console.log('car deleted by bodyStyle successfully',car)
        }
        else{
            console.log('car not found in database')
        }
    } catch (error) {
        console.error('error deleted car by bodyStyle',error)
    }
}


deleteCarByBodyStyle("Coupe")
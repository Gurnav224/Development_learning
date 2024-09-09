const {initializeDatabase } = require('./config/db.connect');
const fs = require('fs')
const Car = require('./models/cars.model')

initializeDatabase();


const jsonData = fs.readFileSync('./cars.json','utf-8');
const carsData = JSON.parse(jsonData);



 function seedData(){
    try {
        for(let car of carsData){
            const newCar =  new Car({
                brand:car.brand,
                year:car.year,
                model:car.model,
                bodyStyle:car.bodyStyle,
                fuelType:car.fuelType,
                transmission:car.transmission,
                engine:car.engine,
                mileage:car.mileage,
                color:car.color,
                price:car.price,
                condition:car.condition,
                description:car.description,
                photos:car.photos,
                inMarket:car.inMarket
            })

            newCar.save();

            console.log('car saved ',newCar.brand)
        }
    } catch (error) {
        console.error('error to save new car',error)
    }
}

seedData()
const mongoose = require('mongoose')
require('dotenv').config()
const Car = require('./models/cars.model')
require('./DB')



  //  ex03: define functions for mongoose operations


  async function addCar(){
    const newCar = new Car({
      make: "Toyota",
      model: "Corolla",
      year: 2022
    })
    try {
        const savedCar = await newCar.save();
        console.log('car data successfully added',savedCar)
    } catch (error) {
        console.log('error saving car data',error)
    }
  }
  // addCar()


  async function addAnotherCar(carData){
    const newCar = new Car(carData);
    try {
      const savedCar = await newCar.save();
      console.log('new car successfully added ',savedCar)
    } catch (error) {
      console.error('error saving new car',error)
    }
  }

  // addAnotherCar({
  //   make:'Honda',
  //   model:'Civic',
  //   year:2023
  // })



  // ex05: perform a findAll operation


  async function findAllCars(){
    try {
      const cars = await Car.find({})
      console.log('successfully get all cars',cars)
    } catch (error) {
      console.error('error to getting all cars',error)
    }
  }


  // findAllCars()
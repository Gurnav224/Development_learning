const express  = require('express');

const app = express();

app.use(express.json())




const cars = [
    {
      id: 1,
      make: "Toyota",
      model: "Canary",
      year: 2012
    },
    {
      id: 2,
      make: "Honda",
      model: "Civic",
      year: 2018
    },
    {
      id: 3,
      make: "Ford",
      model: "Mustang",
      year: 2020
    },
    {
      id: 4,
      make: "Tesla",
      model: "Model 3",
      year: 2021
    },
    {
      id: 5,
      make: "BMW",
      model: "M3",
      year: 2019
    }
  ];
  

app.get('/', (req, res)=>{
    res.send('hello , Express')
})


app.post('/cars',(req,res)=>{
    const newCar = req.body;

    if(!newCar.make || !newCar.model || !newCar.year){
        res.status(400).json({error:'Make , model, year are required'})
    }
    else{
        cars.push(newCar);
        res.status(201).json({message:'car added successfully: ',car:newCar})
    }
})


app.get('/cars',(req, res)=>{
    res.send(cars)
})



app.delete('/cars/:id', (req , res) =>{
    
    const carId  = parseInt(req.params.id)

    const index = cars.findIndex((car) => car.id === carId);

    if(index === -1) {
        res.status(404).send('car not found')
    }
    else{
        cars.splice(index, 1)
        res.status(200).json({message:'car deleted successfully'})
    }
})



const PORT = 3000;


app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})
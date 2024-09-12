const express  = require('express');

const app = express();

app.use(express.json())


const movies = [

    { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010 },
  
    { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 }
  
  ];


  const items = [

    { id: 1, itemName: 'Spoon', color: 'Silver', quantity: 8},
  
   { id: 2, itemName: 'Fork', color: 'Silver', quantity: 8 }
  
  ];

app.get('/', (req , res) => {
    res.send('Hello, Express Server')
})


app.post('/movies' , (req , res)=>{
    const newMovie = req.body;


    if(!newMovie.title || !newMovie.director || !newMovie.year){
        res.status(401).send('title, director, year are required')
    }
    else{
        movies.push(newMovie)
        res.status(201).json({msg:'new movie added successfully',movie:newMovie})
    }
})

app.get('/movies', (req , res)=>{
    res.json(movies)
})



app.post('/items', (req , res) => {
    const newItem = req.body;
    if(!newItem.itemName || !newItem.color){
        res.status(401).send('Itemname , color , quantity are required')
    }
    else{
        items.push(newItem)
        res.status(201).json({msg:"new item added successfully",item:newItem})
    }
})

app.get('/items', (req , res) => {
    res.json(items)
})


const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})
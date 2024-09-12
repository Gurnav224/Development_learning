const express  = require('express');


const app = express();

app.use(express.json())

const movies = [

    { id: 1, title: 'Inception', director: 'Christopher Nolan', year: 2010 },
  
    { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 },
  
    { id: 3, title: 'The Shawshank Redemption', director: 'Frank Darabont', year: 1994 }
  
  ];

  const items = [

    { id: 1, itemName: 'Spoon', color: 'Silver', quantity: 8},
  
   { id: 2, itemName: 'Fork', color: 'Silver', quantity: 8 },
  
   { id: 3, itemName: 'Plate', color: 'Off-White', quantity: 6 }
  
  ];


app.get('/', (req , res) => {
    res.json("Express Server")
})


app.post('/movies/:id', (req, res) =>{
    const moiveId = parseInt(req.params.id);
    const updatedMovie = req.body;

    const movieToUpdate = movies.find((movie) => movie.id === moiveId);

    if(!movieToUpdate){
        res.status(404).send("Movie not found")
    }
    else{
        if(!updatedMovie.title || !updatedMovie.director || !updatedMovie.year){
            res.status(400).json({error: " title , director , year are required"})
        }
        else{
            Object.assign(movieToUpdate, updatedMovie);
            res.status(200).json({message:"movie udpated successfuly",movie:movieToUpdate})
        }
    }
})



app.get('/movies', (req , res) => {
    res.json(movies)
})


app.post('/items/:id', (req, res) => {
    const itemId = parseInt(req.params.id);
    const updatedItem = req.body;
    
    const itemToUpdate = items.find((item) => item.id === itemId);

    if(!itemToUpdate){
        res.status(404).json({error:'Item not found '})
    }
    else{

        if(!updatedItem.itemName || !updatedItem.color || !updatedItem.quantity){
            res.status(400).json({error:'item, color, quantity are required'})
        }
        else{
            Object.assign(itemToUpdate, updatedItem)
            res.status(200).json({message:'Item successfully updated', item:itemToUpdate})
        }
    }

})

app.get('/items', (req, res) => {
    res.json(items)
})


const PORT = 3000;


app.listen(PORT , ()=>{
    console.log(`server started at http://localhost:${PORT}`)
})
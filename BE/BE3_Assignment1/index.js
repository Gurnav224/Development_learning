const express = require("express")

const app = express();


app.use(express.json());

const albums = [

    { id: 1, title: 'Abbey Road', artist: 'The Beatles', year: 1969 },
  
    { id: 2, title: 'The Dark Side of the Moon', artist: 'Pink Floyd', year: 1973 },
  
    { id: 3, title: 'Thriller', artist: 'Michael Jackson', year: 1982 }
  
  ];


// 1  /  => output "Hello, This is Express Assignment Server.".

app.get('/', (req , res) => {
    res.send("Hello , This is Express Assignement Server")
})


// 2 . /albums  => New album to be added:  { id: 4, title: 'Back in Black', artist: 'AC/DC', year: 1980 }


app.post('/albums' , (req , res) => {
    const newAlbum = req.body;

    if(!newAlbum.title || !newAlbum.artist || !newAlbum.year) {
        res.status(404).json({error:'title , artist , album are required'})
    }
    else{
        albums.push(newAlbum)
        res.status(200).json({message:'new albume added successfully',album:newAlbum})
    }
})


// 3. /albums =>  array fo albums [ {...}, {...}]

app.get('/albums', (req , res) => {
    res.json(albums)
})


// 4. /albums delete album by id


app.delete('/albums/:id' , (req ,res) => {
    const albumId = req.params.id;

    const index = albums.findIndex((album) => album.id == albumId);

    if(index === -1){
        res.status(404).json({message:'album not found'})
    }
    else{
        albums.splice(index, 1)
        res.status(200).json({message:'album deleted successfully'})
    }

})


// 5. /albums update the album by id;


app.post('/albums/:id', (req, res)=>{
    const albumId = parseInt(req.params.id);
    const updatedAlbum = req.body;

    const albumToUpdate = albums.find((album) => album.id === albumId);

    if(!albumToUpdate){
        res.status(400).json({error:'album not found'})
    }
    else{
        Object.assign(albumToUpdate, updatedAlbum);
        res.status(200).json({message:'album updated successfully',album:albumToUpdate})
    }
})



const PORT = 3000;

app.listen(PORT, ()=> {
    console.log(`server started on http://localhost:${PORT}`)
})
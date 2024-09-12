
const express  = require("express");

const app = express();

const books = [

    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 }
  
  ];



const todos = [

  { id: 1, title: 'Water the plants', day: 'Saturday' },

  { id: 2, title: 'Go for a walk', day: 'Sunday' }

];


app.get('/' , (req ,res) => {
    res.json('Hello, From Express server')
})


app.delete('/books/:id' , (req , res) => {
    const bookId = req.params.id;

    const index = books.findIndex((book) => book.id == bookId);

    if(index === -1) {
        res.status(404).send('book not found')
    }
    else{
        books.splice(index,1);
        res.status(200).json({message:"book deleted successfully"})
    }
})


app.get("/books", (req ,res) => {
    res.json(books)
})


app.delete('/todos/:id', (req ,res) => {
    const todoId = req.params.id;

    const index = todos.find((todo) => todo.id == todoId);

    if(index === -1) {
        res.status(404).send('todo not found')
    }
    else{
        todos.splice(index,1)
        res.status(200).json({message:'todo deleted successfully'})
    }
})

app.get('/todos' , (req ,res) => {
    res.json(todos)
})



const PORT = 3000;


app.listen(PORT, ()=>{
    console.log(`server started at http//:localhost:${PORT}`)
})
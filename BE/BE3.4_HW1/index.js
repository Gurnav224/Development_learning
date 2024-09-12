
const express  = require("express");

const app = express();

app.use(express.json())

const books = [

    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 }
  
  ];


  const todos = [

    { id: 1, title: 'Water the plants', day: 'Saturday' },
  
    { id: 2, title: 'Go for a walk', day: 'Sunday' }
  
  ];



app.get('/', (req, res) =>{
    res.send('Hello, from express server')
})

app.post("/books/:id" , (req , res) => {
    const bookId = parseInt(req.params.id);
    const updatedBook = req.body;

    const bookToUpdate = books.find((book) => book.id === bookId);

    if(!bookToUpdate){
        res.status(404).json({error:'book not found'})
    }
    else{

        if(!updatedBook.title || !updatedBook.author || !updatedBook.year){
            res.status(400).json({error:"title, author, year are required"})
        }
        else{
            Object.assign(bookToUpdate, updatedBook)
            res.status(200).json({message:'book updated successfully',book:bookToUpdate})
        }
    }

})


app.get('/books' , (req ,res) => {
    res.json(books)
})

app.post('/todos/:id', (req, res)=>{
    const todoId = parseInt(req.params.id);
    const updatedTodo = req.body;

  const todoToUpdate = todos.find((todo) => todo.id === todoId);

  if(!todoToUpdate){
    res.status(404).json({error:"Todo does not exists"})
  }
  else{
    if(!updatedTodo.title || !updatedTodo.day){
        res.status(400).json({error:'tile, day are required'})
    }
    else{
        Object.assign(todoToUpdate, updatedTodo);
        res.status(200).json({message:"todo updated successfully", todo:todoToUpdate})
    }
  }

})


app.get('/todos', (req , res) => {
    res.json(todos)
})

const PORT = 3000;


app.listen(PORT, ()=>{
    console.log(`server started at http//:localhost:${PORT}`)
})
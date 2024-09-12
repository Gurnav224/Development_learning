const express  = require('express');

const app = express();

const books = [

    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }
  
  ];


  const todos = [

    { id: 1, title: 'Water the plants', day: 'Saturday' },
  
  ];


app.use(express.json())

app.get('/',(req , res)=>{
    res.send('Hello, Express')
})

app.post('/books',(req,res)=>{
    const newBook = req.body;

    console.log(newBook)

    if(!newBook.title || !newBook.author || !newBook.year){
        res.status(400).send('title, author, year are required')
    }
    else{
        books.push(newBook)
        res.status(201).json({msg:'new book added successfully', book:newBook})
    }

})


app.get('/books',(req, res)=>{
    res.json(books)
})


app.post('/todos', (req , res) => {
    const newTodo = req.body;

    if(!newTodo.title || !newTodo.day){
        res.status(401).send('title , author , year are required')
    }
    else{
        todos.push(newTodo)
        res.status(201).json({msg:'new todo added successfully',todo:newTodo})
    }
})

app.get('/todos', (req , res)=>{
    res.send(todos)
})




const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`server started at ${PORT}`)
})
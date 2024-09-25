const express = require("express");
const { connectDB } = require("./config/db.connect");
const { Book } = require("./models/book.model");
const cors = require('cors')

connectDB();

const app = express();

const corsOption = {
  origin:"*",
  credential:true,
  optionSuccessStatus:200
}


app.use(cors(corsOption))

app.use(express.json());

// Create an API with route "/books" to create a new book data in the books Database.
async function createBook(book) {
  try {
    const newBook = new Book(book);
    const savedBook = await newBook.save();
    return savedBook;
  } catch (error) {
    throw error;
  }
}

app.post("/books", async (req, res) => {
  try {
    const book = await createBook(req.body);
    res
      .status(201)
      .json({ message: "new book created successfully", newBook: book });
  } catch (error) {
    console.error("Error saving book:", error);
    res.status(500).json({ error: "failed to add new book" });
  }
});

// Create an API to get all the books in the database as response

async function getAllBooks() {
  try {
    const books = await Book.find({});
    return books;
  } catch (error) {
    throw error;
  }
}

app.get("/books", async (req, res) => {
  try {
    const books = await getAllBooks();

    if (books.length !== 0) {
      res.status(200).json({
        message: "get all books",
        books: books,
      });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    console.error("Error getting book:", error);
    res.status(500).json({ error: "failed to get books" });
  }
});

// Create an API to get a book's detail by its title

async function getBookByTitle(title) {
  try {
    const book = await Book.findOne({ title: title });
    return book;
  } catch (error) {
    throw error;
  }
}

app.get("/books/:title", async (req, res) => {
  const { title } = req.params;
  try {
    const book = await getBookByTitle(title);

    if (book) {
      res.status(200).json({
        message: "get book by title successfully",
        book: book,
      });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    console.error("Error getting book by title", error);
    res.status(500).json({ error: "failed to get book by title" });
  }
});

//  Create an API to get details of all the books by an author

async function getBookByAuthor(authorName) {
  try {
    const books = await Book.find({ author: authorName });
    return books;
  } catch (error) {
    throw error;
  }
}

app.get("/books/author/:authorName", async (req, res) => {
  const { authorName } = req.params;
  try {
    const books = await getBookByAuthor(authorName);

    if (books !== 0) {
      res.status(200).json({
        message: "get book by author",
        books: books,
      });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    console.error("Error getting book by author", error);
    res.status(500).json({ error: "failed to get books" });
  }
});

//  Create an API to get all the books which are of "Business" genre.

async function getBookByGenre(genreName) {
  try {
    const books = await Book.find({ genre: genreName });
    return books;
  } catch (error) {
    throw error;
  }
}

app.get("/books/genre/:genreName", async (req, res) => {
  const { genreName } = req.params;
  try {
    const books = await getBookByGenre(genreName);

    if (books !== 0) {
      res.status(200).json({
        message: "get book by genre",
        books: books,
      });
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    console.error("Error getting book by genre", error);
    res.status(500).json({ error: "failed to get books" });
  }
});

// Create an API to get all the books which was released in the year 2012.

async function getBookByByReleaseYear(year) {
  try {
    const books = await Book.find({ publishedYear: year });
    return books;
  } catch (error) {
    throw error;
  }
}

app.get("/books/publishedYear/:year", async (req, res) => {
  const { year } = req.params;

  try {
    const books = await getBookByByReleaseYear(year);

    if (books.length !== 0) {
      res.status(200).json({
        message: "get book by publishedYear successfully",
        books: books,
      });
    } else {
      res.status(404).json({
        error: "book not found",
      });
    }
  } catch (error) {
    console.error("Error getting book by publishedYear", error);
    res.status(500).json({ error: "failed to get the books" });
  }
});



// Create an API to update a book's rating with the help of its id

async function updateBookById(bookId,dataToUpdate){
  try {
    const books = await Book.findByIdAndUpdate(bookId, dataToUpdate, {new:true});
    return books
  } catch (error) {
    throw error
  }
}

app.post('/books/:bookId', async (req, res) => {
  const { bookId }  = req.params;
  const updatedData = req.body;
  try {
    const book = await updateBookById(bookId, updatedData);

    if(book){
      res.status(200).json({
        message:'book updated by Id successfully',
        updatedBook: book
      })
    }
    else{
      res.status(404).json({error:'Book Does not exists'})
    }
  } catch (error) {
    console.error('Error Get while updating book by It\'s ID',error)
    res.status(500).json({error:"failed to update the book"})
  }
})

// Create an API to update a book's rating with the help of its title. 


async function updateBookByTitle(bookTitle, dataToUpdate){
  try {
    const book = await Book.findOneAndUpdate({title:bookTitle},dataToUpdate,{new:true});
    return book
  } catch (error) {
    throw error
  }
}

app.post('/books/bookTitle/:bookTitle', async (req, res) => {
  const { bookTitle } = req.params;
  const updatedBook = req.body;
  try {
    const book = await updateBookByTitle(bookTitle , updatedBook);

    if(book){
      res.status(200).json({
        message:'book updated by Title successfully',
        updatedBook:book
      })
    }
    else{
      res.status(404).json({error:'Book does not exist'})
    }

  } catch (error) {
    console.error('failed to update book its id',error)
    res.status(500).json({error:'failed to update the book its title'})
  }
})


// Create an API to delete a book with the help of a book id

async function deleteBookById(bookId){
  try {
    const book = await Book.findByIdAndDelete(bookId);
    return book
  } catch (error) {
    throw error
  }
}

app.delete('/books/:bookId', async (req, res) => {
  const { bookId }  = req.params
  try {
    const book = await deleteBookById(bookId);

    if(book){
      res.status(200).json({
        message:'delete book by its Id',
        book:book
      })
    }
    else{
      res.status(404).json({
        error:"Book does not exist"
      })
    }

  } catch (error) {
    console.error('failed to delete book by its Id',error)
    res.status(404).json({error:"failed to delete the book by its id"})
  }
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});

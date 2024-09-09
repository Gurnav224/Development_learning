const {initializeDatabase} = require('./DB');
const  Book = require('./models/books.model');
const fs = require('fs');


initializeDatabase()

const jsonData = fs.readFileSync('./books.json','utf-8');
const booksData = JSON.parse(jsonData)


 function seedData(){
    try {
        for(let book of booksData){
            const newBook = new Book({
                title:book.title,
                author:book.author,
                publishedYear:book.publishedYear,
                genre:book.genre,
                language:book.language,
                country:book.country,
                rating:book.rating,
                summary:book.summary,
                coverImageUrl:book.coverImageUrl
            })
             newBook.save();

            console.log('book title ',newBook.title)
        }
    } catch (error) {
        console.error('error to seeding bookdata ',error)
    }
}

seedData()
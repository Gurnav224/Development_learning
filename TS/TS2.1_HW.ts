

interface Book {
    title: string,
    author: string,
}

const myBook: Book = {
    title: 'book title 1',
    author: 'author 1'
}



const printBookInfo = (book: Book): string => {
    return `Title: ${book.title} Author ${book.author}`
}


console.log(printBookInfo(myBook));


interface User {
    username: string,
    email: string,
}

const myUser: User = {
    username: 'user1',
    email: 'example@gmail.com'
}

const printUserInfo = (user: User): string => {
    return `Username: ${user.username} Email ${user.email}`
}
console.log(printUserInfo(myUser));


interface Movie {
    title: string,
    director: string,
    releaseYear: number,
    genre: string[]
}
const myMovie: Movie = {
    title: 'movie title 1',
    director: 'director 1',
    releaseYear: 2023,
    genre: [ 'action', 'comedy' ]
}



interface Laptop {
    brand: string,
    model: string,
    year: number,
    specs: {
        processor: string,
        ram: number,
        storage: number
    }
}

const myLaptop: Laptop = {
    brand: 'brand 1',
    model: 'model 1',
    year: 2023,
    specs: {
        processor: 'processor 1',
        ram: 16,
        storage: 512
    }
}


interface ConcatFunction {
    (str1: string, str2: string): string
}
const concatStrings: ConcatFunction = (str1, str2) => {
    return str1 + str2
}
console.log(concatStrings('Hello', 'World'))


interface BooleanFunction {
    (value: number): boolean
}

const isPositive: BooleanFunction = (value) => {
    return value > 0
}
console.log(isPositive(5)) // true


interface SubtractFunction {
    (a: number, b: number): number
}

const subtract: SubtractFunction = (a, b) => {
    return a - b
}
console.log(subtract(10, 5)) // 5


interface StringCheckerFunction {
    (str: string): boolean
}
const isLongerThanTen: StringCheckerFunction = (str) => {
    return str.length > 10
}

console.log(isLongerThanTen('Hello World')) // true

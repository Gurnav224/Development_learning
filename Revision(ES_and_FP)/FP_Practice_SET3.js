// FP_Practice_SET3;

console.log(`\nProgram 1`)

const cars = [
    { make: "Toyota", model: "Corolla", year: 2010 },
    { make: "Honda", model: "Civic", year: 2012 },
    { make: "Toyota", model: "Camry", year: 2015 },
    { make: "Ford", model: "Mustang", year: 2018 },
  ];
  
  const findToyotaCar = (cars) => cars.find((car) => car.year > 2010)
  
  const toyotaCar = findToyotaCar(cars);
  console.log(toyotaCar); 


  console.log(`\nProgram 2`)

  const getCarDetails = (cars) => cars.filter((car) => car.year > 2012)
  
  const getCars = getCarDetails(cars);
  console.log(getCars);
 

  console.log('\nProgram 3');

  const products = [
    { name: "Toothbrush", price: 29, category: "health" },
    { name: "Coffee Maker", price: 99, category: "home" },
      { name: "iPad", price: 799, category: "electronics" },
    { name: "Smartwatch", price: 199, category: "electronics" },
  ];
  
  // Your code here

  const findElectronicsProduct = (products) => products.find((product) => product.category === "electronics")
  
  const electronicsProduct = findElectronicsProduct(products);
  console.log(electronicsProduct); 

  console.log('\nProgram 4')


  // Your code here
  const getAllElectronicProducts = (products) => products.filter((product) => product.category === "electronics")

const electronicProducts = getAllElectronicProducts(products);
console.log(electronicProducts); 


console.log('\nProgram 5');
const students = [
    { name: "Alice", age: 16, grade: 90 },
    { name: "Bob", age: 17, grade: 80 },
    { name: "Charlie", age: 15, grade: 95 },
    { name: "David", age: 16, grade: 85 },
  ];
  // Your code here
  
  const filterStudentsByGrade = (students, grade) => students.filter((student) => student.grade > grade)

  const highGradeStudents = filterStudentsByGrade(students, 85);
  console.log(highGradeStudents); 


  console.log('\nProgram 6');

  const books = [
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
    { title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", pageCount: 193 },
    { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 },
  ];
  

  const findBookWithMoreThan500Pages = (books) => books.find((book) => book.pageCount > 500)
  
  const bookWithMoreThan500Pages = findBookWithMoreThan500Pages(books);
  console.log(bookWithMoreThan500Pages); 
  

  console.log('\nProgram 7');

  const customers = [
    { name: 'John', age: 25, gender: 'Male' },
    { name: 'Jane', age: 30, gender: 'Female' },
    { name: 'Bob', age: 40, gender: 'Male' },
    { name: 'Alice', age: 35, gender: 'Female' },
  ];

  const getMaleCustomers = (customers) =>  customers.filter((customer) => customer.gender === "Male")
  
  const maleCustomers = getMaleCustomers(customers);
  console.log(maleCustomers); 
 

console.log('\nProgram 8')
const games = [
    {title: "The Witcher 3: Wild Hunt", developer: "CD Projekt Red", genre: "RPG"},
    {title: "Grand Theft Auto V", developer: "Rockstar North", genre: "Action"},
    {title: "Portal 2", developer: "Valve Corporation", genre: "Puzzle"},
    {title: "The Legend of Zelda: Breath of the Wild", developer: "Nintendo", genre: "Adventure"}
  ];
  const filterByGenre = (games, genre) => games.filter((game) => game.genre === genre)
  
  const filteredGames = filterByGenre(games, "RPG");
  console.log(filteredGames);


  console.log('\nProgram 9')
 
  // Your code here

  const getCarModel = (cars) => cars.filter((car) => car.year > 2012).map((car) => car.model)
  
  const carModels = getCarModel(cars);
  console.log(carModels);


  console.log('\nProgram 10');


  // Your code here

  const getTitlesWithMoreThan700Pages = (books) => books.filter((book) => book.pageCount > 700).map((book) => book.title)
  
  const booksWithMoreThan700Pages = getTitlesWithMoreThan700Pages(books);
  console.log(booksWithMoreThan700Pages); 

  console.log('\nProgram 11');


  const numbers = [12, 23, 4, 2, 11, 21] 

const sumOfEvenNumbers = (numbers) => numbers.reduce((sum,num) => num % 2 ===0 ? sum + num : sum)

console.log(sumOfEvenNumbers(numbers))


console.log('\nProgram 12');

const students2 = [
    { name: 'John', score: 80 },
    { name: 'Jane', score: 90 },
    { name: 'Bob', score: 75 },
    { name: 'Alice', score: 85 },
  ];
  

  const getAverageScore = (students) => students.reduce((totalScore,student) => totalScore + student.score , 0)/students2.length;
  
  console.log(getAverageScore(students2)); 

  console.log('\nProgram 13');
  const products1 = [
    { name: 'Shirt', price: 20, quantity: 2 },
    { name: 'Pants', price: 30, quantity: 1 },
    { name: 'Shoes', price: 50, quantity: 1 },
    { name: 'Hat', price: 10, quantity: 3 },
  ];
  

  const getTotalCost = (products) => products.reduce((total,product) => total + product.price * product.quantity,0)
  
  console.log(getTotalCost(products1)); 

console.log('\nProgram 14')

const strings = ['Hello', ' ', 'world', '!'];
const concatenateStrings = (arr) => arr.reduce((str,word) => str + word,'')

console.log(concatenateStrings(strings)); 


console.log('\nProgram 15')

const numbers2 = [10, 5, 8, 3, 6];


const getMinimumNumber = (numbers) => numbers.reduce((min,num) => num < min ? num : min)

console.log(getMinimumNumber(numbers2)); 


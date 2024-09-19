console.log("\nProgram 1");

const incrementNumbers = (numbers) => numbers.map((num) => num + 3);

const numbers = [1, 2, 3, 4, 5];
console.log(incrementNumbers(numbers));

console.log("\nProgram 2");

const capitalizeArray = (arr) => arr.map((arr) => arr.toUpperCase());

const myArray = ["apple", "banana", "cherry"];
console.log(capitalizeArray(myArray));

console.log("\nProgram 3");

const people = [
  { name: "Ankit", age: 25 },
  { name: "Vinit", age: 24 },
  { name: "Shashi", age: 29 },
];
const getAges = (people) => people.map((person) => person.age);

const ages = getAges(people);
console.log(ages);
console.log("\nProgram 4");
const products = [
  { name: "Lip Balm", stock: 100 },
  { name: "PERFUME", stock: 400 },
  { name: "Socks", stock: 200 },
];

const getProductNamesInLowerCase = (products) =>
  products.map((product) => product.name);

console.log(getProductNamesInLowerCase(products));

console.log("\nProgram 5");

const cities = [
    { name: 'New York', population: 8538000 },
    { name: 'Los Angeles', population: 3976000 },
    { name: 'Bangalore', population: 13608000 }
  ];

  const getCityNames = (cities) => cities.map((city) => city.name)
  
  console.log(getCityNames(cities)); 
console.log("\nProgram 6");

const fruits = ['apple', 'banana', 'cherry', 'watermelon', 'pineapple'];
const filterLongStrings = (arr) => arr.filter((fruit) => fruit.length > 5)
console.log(filterLongStrings(fruits)); 

console.log("\nProgram 7");

const numbers2 = [1, 2, 30, 4, 15];
const isDivisibleBy3and5 = (numbers) => numbers.filter((num) => num %3 === 0 && num % 5 ===0)
console.log(isDivisibleBy3and5(numbers2));


console.log("\nProgram 8");

const people2 = [
    { name: 'Rahul', age: 25 },
    { name: 'Raj', age: 35 },
    { name: 'Vijay', age: 45 }
  ];

  const filterByAge = (people) => people.filter((person) => person.age > 30)
  
  console.log(filterByAge(people2)); 
console.log("\nProgram 9");


const students = [
    { name: 'Aditya', score: 85 },
    { name: 'Bob', score: 75 },
    { name: 'Charlie', score: 90 }
  ];
  
  const filterByScore  = (students) => students.filter((student) => student.score > 80)

  console.log(filterByScore(students)); 

console.log("\nProgram 10");

const people3 = [
    { name: 'Ridhima', age: 75, city: 'Indore' },
    { name: 'Akshay', age: 60, city: 'Delhi' },
    { name: 'Udit', age: 80, city: 'Indore' },
      { name: 'Venki', age: 80, city: 'Bangalore' }
  ];

  const filterByCityAndAge  = (people) => people.filter((person) => person.city === "Indore" && person.age > 70)

  const filteredPeople = filterByCityAndAge(people3);
  console.log(filteredPeople); 
console.log("\nProgram 11");
const books = [
    {title: "The Hitchhiker's Guide to the Galaxy", author: "Douglas Adams", genre: "Science Fiction"},
    {title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction"},
    {title: "1984", author: "George Orwell", genre: "Science Fiction"},
    {title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance"}
  ];

  const filterByGenre = (books , genre) => books.filter((book) => book.genre === genre)
  
  const filteredBooks = filterByGenre(books, "Science Fiction");
  console.log(filteredBooks)
console.log("\nProgram 12");


const employees = [
    {name: "Abhay", age: 25, salary: 20000},
    {name: "Joice", age: 30, salary: 35000},
    {name: "Reena", age: 35, salary: 15000},
    {name: "Jeena", age: 40, salary: 50000}
  ];

  const filterBySalary = (employees, salary, age) => employees.filter((employee) => employee.salary > salary && employee.age > age)
  
  const filteredEmployees = filterBySalary(employees, 22000, 25);
  console.log(filteredEmployees);
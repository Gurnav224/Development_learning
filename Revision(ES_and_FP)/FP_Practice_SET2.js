
// FP_Practice_SET2

console.log('\nProgram 1');

const people = [
    { name: 'Raj', age: 28 },
    { name: 'Swapnil', age: 42 },
    { name: 'Anushka', age: 35 }
]

const getNames = (people) => people.map((person) => person.name);

console.log(getNames(people))

const numbers = [1, 2, 3, 4];

const multiplyByFive = (numbers) => numbers.map((number) => number * 5);

console.log(multiplyByFive(numbers));

console.log('\nProgram 3');


const employeeData = [
    {name: "ram", dept: "marketer"}, 
    {name: "Radha", dept: "SDE"},
    {name: "shyam", dept: "finance professional"},
]


// Your code here
const greetEmployeeMessages = (employees) => employees.map((employee) => `Hi ${employee.name} we are glad to have you as a ${employee.dept}`)

console.log(greetEmployeeMessages(employeeData));


console.log('\nProgram 4');
const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'Pride and Prejudice', author: 'Jane Austen' },
  ];
  
  // Your code here
  const getBookTitles = (books) => books.map((book) => book.title)
  
  const titles = getBookTitles(books);
  console.log(titles); 

  console.log('\nProgram 5');

  const studentName = ["Ram", "Anjali", "Arpit", "Bhanu Kumar", "Jaya", "Ankit", "shayam"]
// Your code here
const filterStudent = (students) => students.filter((student) => student.startsWith("A"))
console.log(filterStudent(studentName));


console.log('\nProgram 6');
const productData = [
    {prodName: "Dairy Milk", price: 10},
    {prodName: "Dairy Milk Silk", price: 70},
    {prodName: "Five Star", price: 20},
    {prodName: "Mars", price: 50}
]
// Your code here
const getProducts = (products , price) => products.filter((product) => product.price > price)

console.log(getProducts(productData, 40))

console.log('\nProgram 7');

const numbers2 = [1, 2, 3, 21, 14, 7];
const isDivisibleBy7 = (numbers) => numbers.find((num) => num % 7 === 0)

console.log(isDivisibleBy7(numbers2))


console.log('\nProgram 8');
const names = ["Mohan", "Anjali", "Geetanjali", "Ankit", "Bhanu Kumar", "Ramakrishnan",  "shayam"]

const isNamesGreaterThan8  = (names) => names.find((name) => name.length > 8)
console.log(isNamesGreaterThan8(names));


console.log('\nProgram 9');
const students = [
    { name: "John", grade: "B" },
    { name: "Mary", grade: "A" },
    { name: "Sam", grade: "C" },
    { name: "Sarah", grade: "A" },
  ];
  
  const findStudentWithGradeA = (students) => students.find((student) => student.grade === "A")
  
  const studentWithGradeA = findStudentWithGradeA(students);
  console.log(studentWithGradeA); 

  console.log('\nProgram 10');
  const students2 = [
    { name: "John", grade: "B", scholarship: false },
    { name: "Mary", grade: "B", scholarship: true },
    { name: "Sam", grade: "A", scholarship: false },
    { name: "Sarah", grade: "A", scholarship: true },
  ];
  
  

  const findStudent = (students) => students.find((student) => student.grade === "A" ||  student.scholarship)
  
  const student = findStudent(students2);
  console.log(student); 


  console.log('\nProgram 11');
 
  const students3 = [
    { name: "John", grade: "B", scholarship: false },
    { name: "Mary", grade: "A", scholarship: true },
    { name: "Sam", grade: "A", scholarship: false },
    { name: "Sarah", grade: "B", scholarship: true },
  ];
  
 
  const findStudent2 = (studentsData) => studentsData.find((student) => student.grade === "B" && student.scholarship)
  
  const student2 = findStudent2(students3);
  console.log(student2); 
  


  console.log('\nProgram 12');

  const bollywoodMovies = [
    { title: 'Sholay', director: 'Ramesh Sippy', year: 1975, rating: 8.2 },
    { title: 'Amar Akbar Anthony', director: 'Manmohan Desai', year: 1977, rating: 7.6 },
    { title: 'Namak Halaal', director: 'Prakash Mehra', year: 1982, rating: 7.4 },
    { title: 'Mr. India', director: 'Shekhar Kapur', year: 1987, rating: 7.8 },
    { title: 'Qayamat Se Qayamat Tak', director: 'Mansoor Khan', year: 1988, rating: 7.6 },
    { title: 'Parinda', director: 'Vidhu Vinod Chopra', year: 1989, rating: 8.1 },
    { title: 'Dil', director: 'Indra Kumar', year: 1990, rating: 7.8 }
  ];
  
 

  const getBestOldBollywoodMovies = (movies) => movies.filter((movie) => movie.year < 1990 && movie.rating > 8).map((movie) => movie.title)
  
  const bestOldMovies = getBestOldBollywoodMovies(bollywoodMovies);
  console.log(bestOldMovies);
  

console.log('\nProgram 1');
const students = [

    { name: "Alice", grade: 80 },
  
    { name: "Bob", grade: 65 },
  
    { name: "Charlie", grade: 90 },
  
  ];
  
  
  const aboveGrade70 = students.filter((student)=>student.grade>70);
  console.log(aboveGrade70)


  console.log('\nProgram 2');

  const products = [

    { name: "Laptop", price: 1200 },
  
    { name: "Smartphone", price: 800 },
  
    { name: "Tablet", price: 500 },
  
  ];


  const filterProductsAbove1000 = products.filter((product)=>product.price<=1000);
  console.log(filterProductsAbove1000);

  console.log('\nProgram 3')
  const employees = [

    { name: "Alice", salary: 60000 },
  
    { name: "Bob", salary: 45000 },
  
    { name: "Charlie", salary: 70000 },
  
  ];



  const lowerSalary50000 = employees.filter((employee)=>employee.salary >=50000);
  console.log(lowerSalary50000)


  console.log('\nProgram 4')

  const movies = [

    { title: "Inception", rating: 8.8 },
  
    { title: "Interstellar", rating: 8.6 },
  
    { title: "The Dark Knight", rating: 9.0 },
  
  ];


  const filterRatingAbove7 = movies.filter((movie)=>movie.rating >=7);

  console.log(filterRatingAbove7);


  console.log('\nProgram 5');

  const cars = [

    { brand: "Toyota", year: 2018 },
  
    { brand: "Honda", year: 2019 },
  
    { brand: "Ford", year: 2010 },
  
  ];

  const carsOlderThan5 = cars.filter((car)=>{
    const currentYear = new Date().getFullYear();
    const carYear = car.year;

    return (currentYear - carYear )<= 5
  });

  console.log(carsOlderThan5)



  console.log('\nProgram 6');

  const students2 = [

    { name: "Alice", gpa: 3.8 },
  
    { name: "Bob", gpa: 3.2 },
  
    { name: "Charlie", gpa: 3.9 },
  
  ];

  const filterStudents2 = students2.filter((student)=>student.gpa >= 3.5);

  console.log(filterStudents2);

  console.log('\nProgram 7');

  const fruits = [

    { name: "Apple", pricePerPound: 1.5 },
  
    { name: "Banana", pricePerPound: 2.2 },
  
    { name: "Orange", pricePerPound: 1.8 },
  
  ];

  const filterFruit = fruits.filter((fruit)=>fruit.pricePerPound <= 2);

  console.log(filterFruit)

  console.log('\nProgram 8');

  const employees2 = [

    { name: "Alice", employed: true },
  
    { name: "Bob", employed: false },
  
    { name: "Charlie", employed: true },
  
  ];

  const isEmployed = employees2.filter((employee)=>employee.employed);

  console.log(isEmployed);


  console.log('\nProgram 9');

  const products2 = [

    { name: "Laptop", inStock: true },
  
    { name: "Smartphone", inStock: false },
  
    { name: "Tablet", inStock: true },
  
  ];

  const filterOutInStock = products2.filter((product)=>product.inStock);

  console.log(filterOutInStock);


  console.log('\nProgram 10');

  const laptops = [

    { brand: "Dell", screenSize: 14 },
  
    { brand: "HP", screenSize: 15.6 },
  
    { brand: "Lenovo", screenSize: 13 },
  
    { brand: "Acer", screenSize: 17 },
  
  ];

  const screenSizeIsAbove15 = laptops.filter((laptop)=>laptop.screenSize >=15);

  console.log(screenSizeIsAbove15)
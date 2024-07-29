
console.log('\nProgram 1');


const books = [

    { title: "The Catcher in the Rye", author: "J.D. Salinger" },
  
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
  
    { title: "1984", author: "George Orwell" },
  
  ];

  const bookName = books.map((book)=>book.title);
  console.log(bookName)

  console.log('\nProgram 2');

  const fruits = [

    { name: "apple", color: "red" },
  
    { name: "banana", color: "yellow" },
  
    { name: "kiwi", color: "brown" },
  
  ];
  

  const fruitsNameUppercase = fruits.map((fruit)=>({...fruit,name:fruit.name.toUpperCase()}));

  console.log(fruitsNameUppercase);


  console.log('\nProgram 3');
  const employees = [

    { name: "Alice", salary: 50000 },
  
    { name: "Bob", salary: 60000 },
  
    { name: "Charlie", salary: 70000 },
  
  ]

  const addSalaryPercentage =  employees.map((employee)=>({...employee,salary:(employee.salary+employee.salary*0.1).toFixed(2)}));

  console.log(addSalaryPercentage);


  console.log('\nProgram 4');
  const products = [

    { name: "Laptop", price: 1000 },
  
    { name: "Smartphone", price: 500 },
  
    { name: "Headphones", price: 100 },
  
  ];

  const applyDiscount = products.map((product)=>({...product,price:product.price-product.price*0.2}));
  console.log(applyDiscount)


  console.log('\nProgram 5');

  const cities = [

    { name: "New York", temperature: 25 },
  
    { name: "Los Angeles", temperature: 30 },
  
    { name: "Chicago", temperature: 20 },
  
  ];

  const temperatureConvertFahrenheit = cities.map((city)=>({...city,temperature:(city.temperature*1.8)+32}));

  console.log(temperatureConvertFahrenheit);



  console.log('\nProgram 6');

  const teachers = [

    { name: "Olivia", monthlySalary: 4500 },
  
    { name: "Paul", monthlySalary: 5500 },
  
    { name: "Rachel", monthlySalary: 5000 },
  
  ];


  const addBonusToTeachers = teachers.map((teacher)=>({...teacher,monthlySalary:teacher.monthlySalary*12+500}));

  console.log(addBonusToTeachers)


  console.log('\nProgram 7');

  const countries = [

    { name: "USA", population: 331000000, landArea: 9833517 },
  
    { name: "India", population: 1393000000, landArea: 2973190 },
  
    { name: "Brazil", population: 213993437, landArea: 8515767 },
  
  ];


  const calulateDensity = countries.map((country)=>({ 
    name:country.name,
     density:country.population/country.landArea}));

  console.log(calulateDensity)
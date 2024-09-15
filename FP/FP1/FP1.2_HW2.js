
console.log('\nProgram 1');

const students = [

    { name: "Alice", score: 85 },
  
    { name: "Bob", score: 55 },
  
    { name: "Charlie", score: 75 },
  
  ];

  const studentsPassed = students.map((student)=>({...student,passed:student.score>60}));

  console.log(studentsPassed)


  console.log('\nProgram 2');

  const songs = [

    { title: "Bohemian Rhapsody", duration: 367 },
  
    { title: "Hotel California", duration: 420 },
  
    { title: "Stairway to Heaven", duration: 482 },
  
  ];

  const calculateSongMinutes = songs.map((song)=>{
    const minutes = Math.floor(song.duration/60);
    const seconds = song.duration%60;

    return {
        title:song.title,
        duration:`${minutes}:${seconds}`
    }
  });

  console.log(calculateSongMinutes)

  console.log('\nProgram 3');


  const employees = [

    { name: "Alice", salary: 50000 },
  
    { name: "Bob", salary: 60000 },
  
    { name: "Charlie", salary: 70000 },
  
  ];
  
  const addAnnualSalary = employees.
  map((employee)=>({...employee,annualSalary:employee.salary*12}));

  console.log(addAnnualSalary)

  console.log('\nProgram 4');

  const newStudents = [

    { name: "Alice", age: 22 },
  
    { name: "Bob", age: 17 },
  
    { name: "Charlie", age: 25 },
  
  ];

  const classifyObject = newStudents.map((student)=>({...student,classification:student.age>=18 ? 'adult':'minor'}));
  console.log(classifyObject)

  console.log(`\nProgram 5`);

  const employees2 = [

    { name: "Emily", salary: 60000 },
  
    { name: "David", salary: 45000 },
  
    { name: "Grace", salary: 75000 },
  
  ];


  const addDollarSign = employees2.map((employee)=>({...employee,salary:`$${employee.salary}`}));

  console.log(addDollarSign)


  console.log('\nProgram 6');

  const products = [

    { name: "Laptop", price: 1200 },
  
    { name: "Headphones", price: 50 },
  
    { name: "Smartphone", price: 800 },
  
  ];


  const addLabelPrice = products.map((product)=>({name:product.name,label:product.price>=100 ? 'expensive' : 'affordable'}));

  console.log(addLabelPrice)


  console.log('\nProgram 7');

  const books = [

    { title: "The Catcher in the Rye", year: 1951 },
  
    { title: "Harry Potter and the Sorcerer's Stone", year: 1997 },
  
    { title: "The Hunger Games", year: 2008 },
  
  ];


  const bookCategories = books.map((book)=>({title:book.title,category:book.year >= 2000 ?'modern' : 'classic'}));

  console.log(bookCategories)


  console.log('\nProgram 8');

  const developers = [

    { name: "John", hourlyRate: 40, hoursPerWeek: 30 },
  
    { name: "Lisa", hourlyRate: 50, hoursPerWeek: 35 },
  
    { name: "Mike", hourlyRate: 45, hoursPerWeek: 40 },
  
  ];

  const addAnnualIncome = developers.map((developer)=>({name:developer.name,annualIncome:developer.hourlyRate*developer.hoursPerWeek*50}));
  console.log(addAnnualIncome)


  console.log('\nProgram 9');

  const salesReps = [

    { name: "David", monthlyCommission: 8000 },
  
    { name: "Helen", monthlyCommission: 10000 },
  
    { name: "Ivan", monthlyCommission: 6000 },
  
  ];
  

  const addAnnualIncome2 =  salesReps.map((salesPerson)=>{
    let baseSalary = 50000;
    let annualCommission = salesPerson.monthlyCommission*12;
    let annualIncome = baseSalary+annualCommission;
    return {name:salesPerson.name,annualIncome:annualIncome}
  })

  console.log(addAnnualIncome2)



  console.log('\nProgram 10');

  const students2 = [

    { name: "Alice", score: 85 },
  
    { name: "Bob", score: 60 },
  
    { name: "Charlie", score: 92 },
  
  ];

  const addGrade = students2.map((student)=>{
    if(student.score >= 90 ){
      student.grade = "A"
    }
    else if(student.score >= 80){
      student.grade = "B"
    }
    else if(student.score >= 70){
      student.grade = "C"
    }
    else if(student.score >= 60 ){
      student.grade = "D"
    }
    else {
      student.grade = "F"
    }
    return {name:student.name , grade:student.grade}
  })

  console.log(addGrade)
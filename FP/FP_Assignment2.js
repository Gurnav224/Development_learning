console.log('FP2_Assignment2');

console.log('\nprogram 1');

const books = [

    { title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', genre: 'Fantasy' },
  
    { title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
  
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Drama' },
  
    { title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction' },
  
  ];
  
  // Output: [ { title: 'Harry Potter and the Sorcerer's Stone', author: 'J.K. Rowling', genre: 'Fantasy' }, { title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' } ]
  
  
  const filteredBooks = books.filter((book)=>book.genre==='Fantasy');
  console.log(filteredBooks)


  console.log('\nprogram 2')


  const movies = [

    { title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi" },
  
    { title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action" },
  
    { title: "Interstellar", year: 2014, rating: 8.6, genre: "Sci-Fi" },
  
    { title: "Tripple Frontier", year: 2023, rating: 9.0, genre: "Action" },
  
    { title: "Jurassic Park", year: 1993, rating: 8.1, genre: "Adventure" },
  
  ];
  
  // Output: [{ title: 'Tripple Frontier', year: 2023, rating: 9, genre: 'Action' }]

  const filteredMovies = movies.filter((movie)=>movie.year > 2010  && movie.rating > 8 && (movie.genre === "Action" || movie.genre === 'Adventure'));

  console.log(filteredMovies)


  console.log('\nprogram 3')

  const restaurants = [

    { name: "Pasta Paradise", stars: 4.5, cuisine: "Italian", openOnSundays: false },
  
    { name: "Sushi Sensation", stars: 3.8, cuisine: "Japanese", openOnSundays: true },
  
    { name: "Burger Binge", stars: 4.2, cuisine: "American", openOnSundays: true },
  
    { name: "Nasi", stars: 4.5, cuisine: "Italian", openOnSundays: true },
  
  ];
  
  // Output: [{ name: 'Nasi', stars: 4.5, cuisine: 'Italian', openOnSundays: true }]

  const filterRestaurants = restaurants.filter((restaurant)=>restaurant.stars> 4 && restaurant.cuisine==='Italian' && restaurant.openOnSundays);


  console.log(filterRestaurants)


  console.log('\nprogram 4');

  const products = [

    { name: 'Bread', price: 480, quantity: 3 },
  
    { name: 'Clips', price: 200, quantity: 5 },
  
    { name: 'green Bread Knife', price: 3077, quantity: 1 },
  
    { name: 'Slipper', price: 150, quantity: 2 },
  
  ]
  
  // Output: ["Bread", "green Bread Knife"]

const productNameArray = products.filter((product)=>product.name.includes('Bread')).map((product)=>product.name);


console.log(productNameArray);

console.log('\nprogram 5')

const employees = [

    { name: "David", salary: 60000 },
  
    { name: "Emma", salary: 75000 },
  
    { name: "Alex", salary: 90000 },
  
    { name: "Sophie", salary: 55000 },
  
  ];


  const totalSalary = employees.reduce((total,currentSalary)=>{
    return total + currentSalary.salary
  },0)



  const averageSalary = totalSalary/employees.length;

  const modifyEmployees = employees.map((employee)=>({...employee,aboveAverage:employee.salary>averageSalary}));


  console.log(modifyEmployees);



  console.log('\nprogram 6');

  const community = [

    { name: "Raju", role: "student", hours: [1, 2, 3, 1, 2, 3, 0] },
  
    { name: "Aakash", role: "mentor", hours: [1, 2, 3, 1, 2, 3, 0] },
  
    { name: "Ramesh", role: "student", hours: [1, 2, 3, 1, 2, 3, 3] },
  
    { name: "Jiten", role: "TA", hours: [2, 2, 3, 5, 2, 3, 0] },
  
    { name: "Harsh", role: "student", hours: [1, 7, 3, 2, 2, 3, 0] },
  
    { name: "Akshay", role: "student", hours: [1, 6, 3, 1, 2, 3, 0] },
  
    { name: "Rohan", role: "mentor", hours: [1, 2, 3, 12, 2, 3, 0] },
  
    { name: "Mohan", role: "student", hours: [1, 8, 3, 0, 2, 3, 0] }
  
  ];


  

//   const mostActiveCommunityMember = (community)=>{
//     const totalHours = community.map((member)=>({
//         ...member,
//         totalHours:member.hours.reduce((acc,curr)=>acc+curr,0)
//     }))

//     const maxHours = Math.max(...totalHours.map((member)=>member.totalHours))

//     const filterActiveStudent = totalHours.filter((member)=>member.totalHours===maxHours).map((member)=>({name:member.name,role:member.role,hours:member.hours}))

//     return filterActiveStudent
//   }


const mostActiveMember  = (community)=>{
    const mostActive = community.reduce((mostAcitve,currentPerson)=>{

     const mostAcitveTotalHours = mostAcitve.hours.reduce((total,hours)=>total + hours ,0)

        const currentPersonTotalHours = currentPerson.hours.reduce((total,hours)=>total + hours,0);



        return currentPersonTotalHours > mostAcitveTotalHours ? currentPerson : mostAcitve
    },community[0])

    return mostActive
}


  console.log(mostActiveMember(community))


  console.log('\nprogram 7');
  const communityData = [

    { name: "Raju", role: "student", hours: [1, 2, 3, 1, 2, 3, 0] },
  
    { name: "Aakash", role: "mentor", hours: [1, 2, 3, 4, 5, 6, 7] },
  
    { name: "Ramesh", role: "student", hours: [4, 5, 6, 4, 5, 6, 0] },
  
    { name: "Jiten", role: "TA", hours: [2, 2, 3, 5, 2, 3, 0] },
  
    { name: "Harsh", role: "student", hours: [7, 8, 9, 7, 8, 9, 0] },
  
    { name: "Akshay", role: "student", hours: [1, 3, 5, 7, 9, 0, 2] },
  
    { name: "Rohan", role: "mentor", hours: [1, 2, 3, 12, 2, 3, 0] },
  
    { name: "Mohan", role: "student", hours: [4, 6, 8, 0, 1, 9, 2] }
  
  ];


  const mostActiveCommunityMember = (communityData) =>{
   
    const persons = communityData.map((person)=>{
        const totalHours = person.hours.reduce((total,hours)=>total+hours,0);

        return totalHours > 20 && person.role === "student" ? {...person, tag:'Regular'} : {...person}
    })

    return persons
    
  }


  console.log(mostActiveCommunityMember(communityData))
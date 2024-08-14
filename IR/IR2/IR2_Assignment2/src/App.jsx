/* eslint-disable react/prop-types */


const ExerciseDetails = ({exercises}) =>{
  const totalCalories = exercises.reduce((total, exercise) => total + exercise.caloriesBurned , 0)

  return(
    <>
      <h1>Total Calories burned During Exercise</h1>
      {totalCalories}
    </>
  )
}

const SongDetails = ({songs}) => {
  const filterSongs = songs.filter((song) => song.rating > 3.9)
  const totalDuration = filterSongs.reduce((total, song ) => total + song.duration , 0)

  return(
    <>
      <h1>Total Song Duration Who's rating above 3.9</h1>
      {totalDuration}
    </>
  )
}

const BookDetails = ({books, title}) =>{
  const book = books.find((book) => book.title === title);

  return(
    <>
      <h1>Book Details</h1>
      <h2>Title: {book.title}</h2>
      <p>author: {book.author}</p>
      <p>Genre: {book.genre}</p>
    </>
  )
}

const Song = ({songs, title}) =>{
  const song = songs.find((song) => song.title === title);

  return(
    <>
      <h1>Song Details</h1>
      <h2>Title: {song.title}</h2>
      <p>Artists: {song.artist}</p>
      <p>Genre: {song.genre}</p>
    </>
  )
}

const CityDetails = ({cities, name}) =>{
  const city = cities.find((city)=> city.name === name);

  return(
    <>
      <h1>City Details</h1>
      <h2>Name: {city.name}</h2>
      <p>Population: {city.population}</p>
    </>
  )
}

const ProductDetails = ({products , id}) =>{
  const product = products.find((product) => product.id === id);

  return(
    <>
      <h1>Product Details</h1>
      <h2>Name: {product.name}</h2>
      <p>Price: {product.price}</p>
    </>
  )
}

const StudentDetails = ({students, name}) =>{
  const student = students.find((student) => student.name === name);

  return(
    <>
      <h1>Student Details</h1>
      <h2>Name: {student.name}</h2>
      <p>Age: {student.age}</p>
      <h3>Grade:</h3>
      <p>Math: {student.grades.math}</p>
      <p>Science: {student.grades.science}</p>
      <p>English: {student.grades.english}</p>
    </>
  )
}

const OrderDetails = ({orders, customer}) =>{
  const order = orders.find((order) => order.customer === customer);
    console.log(order.products)
  return(
    <>
      <h1>Order Details</h1>
      <h2>Customer: {order.customer}</h2>
      <p>Total Amount: {order.totalAmount}</p>
      <ul>
      {
        order.products.map((product) =>(
          <li key={product.id}>
          <p>Name: {product.name}</p>
          <p>Quantity: {product.quantity}</p>
          </li>
        ))
      }
      
      </ul>
    </>
  )
}

const EmployeesDetails = ({employees, id}) =>{
  const employee = employees.find((employee) => employee.id === id);

  return(
    <>
      <h1>Employee Details</h1>
      <h2>Name: {employee.name}</h2>
      <p>Position: {employee.position}</p>
      <p>Department: {employee.department.name} , {employee.department.location}</p>
    </>
  )
}

const StoreDetails = ({store})=>{
  const totalInStock = store.categories.filter((category) => category.itemDetail.inStock);



  return(
    <>
      <h1>Total Number of Items In stock</h1>
      {totalInStock.length}
    </>
  )
}

const App = () => {
  const exercises = [

    { id: 1, name: "Running", caloriesBurned: 300 },
    
    { id: 2, name: "Cycling", caloriesBurned: 200 },
    
    { id: 3, name: "Swimming", caloriesBurned: 400 },
    
    ];
    const songs = [

      { id: 1, title: "Song A", duration: 180, rating: 4.2 },
    
      { id: 2, title: "Song B", duration: 210, rating: 3.8 },
    
      { id: 3, title: "Song C", duration: 150, rating: 4.5 },
    
    ];

    const books = [

      { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction" },
    
      { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian" },
    
      { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Classic" },
    
    ];

    const songs2 = [

      { id: 1, title: "Stairway to Heaven", artist: "Led Zeppelin", genre: "Rock" },
    
      { id: 2, title: "Bohemian Rhapsody", artist: "Queen", genre: "Rock" },
    
      { id: 3, title: "Rolling in the Deep", artist: "Adele", genre: "Pop" },
    
    ];
    
    const cities = [

      { id: 1, name: "New York", population: 8500000 },
    
      { id: 2, name: "Paris", population: 2200000 },
    
      { id: 3, name: "Tokyo", population: 3770000 },
    
    ];

    const products = [

      { id: 1, name: "Laptop", price: 1200 },
    
      { id: 2, name: "Smartphone", price: 800 },
    
      { id: 3, name: "Headphones", price: 60 },
    
    ];
    
    const students = [

      { id: 1, name: "Alice", age: 20, grades: { math: 90, science: 85, english: 92 } },
    
      { id: 2, name: "Bob", age: 22, grades: { math: 78, science: 80, english: 85 } },
    
      { id: 3, name: "Charlie", age: 21, grades: { math: 95, science: 88, english: 94 } },
    
    ];
    
    const orders = [

      { id: 1, customer: "John Doe", totalAmount: 150, products: [{ id: 101, name: "Widget", quantity: 2 }, { id: 102, name: "Gadget", quantity: 1 }] },
    
      { id: 2, customer: "Alice Smith", totalAmount: 200, products: [{ id: 103, name: "Tool", quantity: 1 }, { id: 104, name: "Device", quantity: 3 }] },
    
      { id: 3, customer: "Bob Johnson", totalAmount: 100, products: [{ id: 105, name: "Accessory", quantity: 5 }] },
    
    ];

    const employees = [

      { id: 1, name: "Jane Doe", position: "Software Engineer", department: { name: "Engineering", location: "Building A" } },
    
      { id: 2, name: "Sam Smith", position: "Marketing Manager", department: { name: "Marketing", location: "Building B" } },
    
      { id: 3, name: "Mike Johnson", position: "HR Specialist", department: { name: "Human Resources", location: "Building C" } },
    
    ];
    

    const store = {

      name: "Tech Emporium",
    
      categories: [
    
        { id: 1, name: "Electronics", itemDetail: { id: 101, product: "Laptop", inStock: true } },
    
        { id: 2, name: "Accessories", itemDetail: { id: 201, product: "Headphones", inStock: true } },
    
        { id: 3, name: "Electronics", itemDetail: { id: 301, product: "Heater", inStock: false } },
    
      ]
    
    };

    
  return (
    <>
    <ExerciseDetails exercises={exercises} />
    <hr />
    <SongDetails songs={songs} />
    <hr />
    <BookDetails books={books}  title={"The Great Gatsby"}/>
    <hr />
    <Song songs={songs2} title={"Bohemian Rhapsody"}/>
    <hr />
    <CityDetails cities={cities}  name={"Paris"}/>
    <hr />
    <ProductDetails  products={products} id={3}/>
    <hr />
    <StudentDetails students={students} name={"Charlie"}/>
    <hr />
    <OrderDetails orders={orders}  customer={"Alice Smith"}/>
    <hr />
    <EmployeesDetails employees={employees}  id={1}/>
    <hr />
    <StoreDetails store={store} />
    </>
  )
}

export default App

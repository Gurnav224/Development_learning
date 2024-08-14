/* eslint-disable react/prop-types */


const CarDetails = ({cars  , model}) =>{

  const car = cars.find((car) => car.model === model);


  return(
    <>
      <h1>Car Details</h1>
      <h2>Model: {car.model}</h2>
      <p>Make: {car.make}</p>
      <p>Year: {car.year}</p>
    </>
  )
}

const GymDetails = ({gyms, location}) =>{
  const gym = gyms.find((gym) => gym.location === location);


  return(
    <>
      <h1>Gym Details</h1>
      <h2>Name: {gym.name}</h2>
      <p>location: {gym.location}</p>
      <p>rating: {gym.rating}</p>
    </>
  )
}

const TravelDetails = ({travels , destination}) =>{
  const travel = travels.find((travel)=> travel.destination === destination);

  return(
    <>
      <h1>Travel Details</h1>
      <h2>Destionation: {travel.destination}</h2>
      <p>Duration: {travel.duration}</p>
      <p>Activities: {travel.activities.join(", ")}</p>
    </>
  )
}

const LaptopDetails = ({laptops,processor}) =>{
  const laptop = laptops.find((laptop) => laptop.processor === processor);

  return(
    <>
      <h1>Laptop Data</h1>
      <h2>Brand: {laptop.brand}</h2>
      <p>Processor: {laptop.processor}</p>
      <p>Ram: {laptop.ram}</p>
    </>
  )
}

const RecipeDetails = ({recipes , dish}) =>{


  const recipe = recipes.find((recipe) => recipe.dish === dish);


  return(
    <>
      <h1>Recipe Details</h1>
      <h2>Dish: {recipe.dish}</h2>
      <p>Cusine: {recipe.cuisine}</p>
      <p>ingredients: {recipe.ingredients.join(", ")}</p>
    </>
  )
}

const BlogDetails = ({posts, title}) =>{
  const post = posts.find((post)=>post.title === title);

  return(
    <>
      <h1>Blog Details</h1>
      <h2>Title: {post.title}</h2>
      <p>content: {post.content}</p>
      <p>category: {post.category}</p>
    </>
  )
}

const App = () => {
  const cars = [

    { model: "Car 1", make: "Make 1", year: 2022 },

    { model: "Car 2", make: "Make 2", year: 2021 },

    { model: "Car 3", make: "Make 3", year: 2023 },

  ];
 
  const gyms = [

    { name: "Gym 1", location: "Location 1", rating: 4.7 },

    { name: "Gym 2", location: "Location 2", rating: 4.2 },

    { name: "Gym 3", location: "Location 3", rating: 4.5 },

  ];
  
  const travels = [

    {

      destination: "Travel 1",

      duration: "5 days",

      activities: ["Hiking", "Sightseeing"],

    },

    {

      destination: "Travel 2",

      duration: "7 days",

      activities: ["Beach", "Shopping"],

    },

    {

      destination: "Travel 3",

      duration: "3 days",

      activities: ["Cultural Tours", "Photography"],

    },

  ];

  const laptops = [

    { brand: "Laptop 1", processor: "Intel i5", ram: "8GB" },

    { brand: "Laptop 2", processor: "AMD Ryzen 7", ram: "16GB" },

    { brand: "Laptop 3", processor: "Apple M1", ram: "12GB" },

  ];


  const recipes = [

    {

      dish: "Recipe 1",

      cuisine: "Italian",

      ingredients: ["Tomatoes", "Pasta", "Cheese"],

    },

    {

      dish: "Recipe 2",

      cuisine: "Mexican",

      ingredients: ["Beans", "Rice", "Avocado"],

    },

    {

      dish: "Recipe 3",

      cuisine: "Indian",

      ingredients: ["Curry", "Rice", "Naan"],

    },

  ];

  const blogPosts = [

    { id: 1, title: 'Blog Post 1', content: 'Content 1', category: 'Technology' },

    { id: 2, title: 'Blog Post 2', content: 'Content 2', category: 'Food' },

    { id: 3, title: 'Blog Post 3', content: 'Content 3', category: 'Fashion' }

  ];


  return (
    <>
    <CarDetails cars={cars} model={"Car 2"} />
    <hr />
    <GymDetails gyms={gyms} location={"Location 2"} />
    <hr />
    <TravelDetails travels={travels}  destination={"Travel 3"}/>
    <hr />
    <LaptopDetails laptops={laptops} processor={"Apple M1"}/>
    <hr />
    <RecipeDetails recipes={recipes} dish={"Recipe 2"}/>
    <hr />
    <BlogDetails  posts={blogPosts}  title={"Blog Post 3"}/>
    </>
  )
}

export default App

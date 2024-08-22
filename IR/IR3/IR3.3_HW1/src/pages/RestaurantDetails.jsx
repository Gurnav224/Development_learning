import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";


const restaurants = [
  {
    id: 1,
    name: "Taste of India",
    cuisine: "Indian",
    location: "123 Curry Ave, Spice Town",
    rating: 4.7,
    description:
      "The Taste Of India offers an authentic Indian dining experience with a wide variety of traditional dishes made from fresh, locally-sourced ingredients.",
    menu: [
      {
        name: "Chicken Tikka Masala",
        price: 14.99,
      },
      {
        name: "Paneer Butter Masala",
        price: 12.99,
      },
      {
        name: "Garlic Naan",
        price: 3.99,
      },
    ],
  },
  {
    id: 2,
    name: "Pizza Paradise",
    cuisine: "Japanese",
    location: "456 Sashimi St, Ocean City",
    rating: 4.8,
    description:
      "Pizza Paradise specializes in fresh sushi and sashimi, offering a serene dining atmosphere with a wide selection of Japanese delicacies.",
    menu: [
      {
        name: "Salmon Nigiri",
        price: 8.99,
      },
      {
        name: "Tuna Sashimi",
        price: 10.99,
      },
      {
        name: "Tempura Udon",
        price: 12.99,
      },
    ],
  },
  {
    id: 3,
    name: "Sushi Delight",
    cuisine: "Italian",
    location: "789 Pasta Blvd, Roma City",
    rating: 4.5,
    description:
      "Sushi Delight offers a taste of Italy with its classic pasta dishes, wood-fired pizzas, and a selection of fine wines in a cozy, family-friendly setting.",
    menu: [
      {
        name: "Margherita Pizza",
        price: 11.99,
      },
      {
        name: "Spaghetti Carbonara",
        price: 13.99,
      },
      {
        name: "Tiramisu",
        price: 6.99,
      },
    ],
  },
];

const RestaurantDetails = () => {
    const {id} = useParams();

    const restaurant = restaurants.find((restaurant) => restaurant.id == id);


  return (
    <>
    <Header/>
        <main className="container py-4">
        <h1 className="display-3 text-muted">{restaurant.name}</h1>
        <p className="fs-5 fw-light">Cuisine: {restaurant.cuisine}</p>
        <p className="fs-5 fw-light">Location: {restaurant.location}</p>
        <p className="fs-5 fw-light">Rating: {restaurant.rating}</p>
        <p className="fs-5 fw-light">{restaurant.description}</p>
        <hr />
        <h2>Menu</h2>
        <div className="row">
            {
                restaurant.menu.map((menuItem)=>(
                    <div key={menuItem.price} className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5>ItemName: {menuItem.name}</h5>
                            <p>Price: ${menuItem.price}</p>
                        </div>
                    </div>
                    </div>
                ))
            }
        </div>
        </main>
    <Footer/>
    </>
  );
};

export default RestaurantDetails;

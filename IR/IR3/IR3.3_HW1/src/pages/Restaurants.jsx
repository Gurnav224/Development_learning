import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Restaurants = () => {
  return (
    <>
    <Header/>
    <main className="container py-4">
    <h1 className="display-4">Restaurants</h1>
    <div className="card mb-3">
        <div className="row g-0">
            <div className="col-md-4">
                <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Restaurant 1" className="img-fluid  rounded-start  rounded-md-bottom w-100 h-100" />

            </div>
            <div className="col-md-8">
            <div className="card-body">
            <h3 className="card-title">Taste of India</h3>
            <p>Enjoy authentic Indian cuisine at taste of india. Explore the variety of delicious dishes from different regions of India</p>
            <p className="text-muted lh-3">Rating: 4.7  | Open Now</p>
            <Link className="btn btn-primary" to='/restaurants/1'>View More</Link>
            </div>
            </div>
           
        </div>
    </div>

    <div className="card mb-3">
        <div className="row g-0">
            <div className="col-md-4">
                <img src="https://images.pexels.com/photos/2898205/pexels-photo-2898205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Restaurant 2" className="img-fluid rounded-start w-100 h-100 "/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h3 className="card-title">Pizza Paradise</h3>
                    <p>Indulge in mouth-watering pizza at Pizza Paradise, with a variety of toppings and crusts. it's a pizza lover's dream </p>
                    <p className="text-muted lh-3">Rating: 4.8 | Open Now</p>
                    <Link className="btn btn-primary" to='/restaurants/2'>View More</Link>
                </div>
            </div>
        </div>
    </div>

    <div className="card mb-3">
        <div className="row g-0">
            <div className="col-md-4">
                <img src="https://media.istockphoto.com/id/496703757/photo/crowd-seated-outside-restaurant-in-palma-majorca.webp?b=1&s=170667a&w=0&k=20&c=8ZZ2-GvbiePntlm2wNcoqKA5Wb7sHmJFE8sPV27yyh0=" alt="Restaurant 3" className="img-fluid rounded-start  h-100"/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h3 className="card-title">Sushi Delight</h3>
                    <p>Indulge in mouth-watering pizza at Sushi Delight, with a variety of toppings and crusts. it's a pizza lover's dream </p>
                    <p className="text-muted lh-3">Rating: 4.5 | Open Now</p>
                    <Link className="btn btn-primary" to='/restaurants/3'>View More</Link>
                </div>
            </div>
        </div>
    </div>


    </main>
    <Footer/>
    </>

  )
}




  export default Restaurants;
  
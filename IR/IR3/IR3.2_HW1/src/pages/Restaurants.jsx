import Footer from "../components/Footer";
import Header from "../components/Header";

const Restaurants = () => {
  return (
    <>
    <Header/>
    <main className="container py-4">
    <h1 className="display-4">Restaurants</h1>
    <div className="card mb-3">
        <div className="row g-0">
            <div className="col-md-4">
                <img src="https://images.pexels.com/photos/776538/pexels-photo-776538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Restaurant 1" className="img-fluid  rounded-start  rounded-md-bottom" />
            </div>
            <div className="col-md-8">
            <div className="card-body">
            <h3 className="card-title">Taste of India</h3>
            <p>Enjoy authentic Indian cuisine at taste of india. Explore the variety of delicious dishes from different regions of India</p>
            <p className="text-muted lh-3">Rating: 4.7  | Open Now</p>
            </div>
            </div>
           
        </div>
    </div>

    <div className="card mb-3">
        <div className="row g-0">
            <div className="col-md-4">
                <img src="https://images.pexels.com/photos/2898205/pexels-photo-2898205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Restaurant 3" className="img-fluid rounded-start "/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h3 className="card-title">Pizza Paradise</h3>
                    <p>Indulge in mouth-watering pizza at Pizza Paradise, with a variety of toppings and crusts. it's a pizza lover's dream </p>
                    <p className="text-muted lh-3">Rating: 4.8 | Open Now</p>
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
  
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const stays = [
  {
    id: 1,
    name: "Luxurious Taj Mahal View Apartment",
    type: "Hotel",
    location: "123 Alpine Road, Luxurious Taj Mahal View Apartment",
    rating: 4.5,
    description:
      "wake up to breathtaking view of Taj Mahal from this Luxurious apartment. Explore the rich history and beauty of the iconic monument right your window",
    amenities: [
      "Free Wi-Fi",
      "Breakfast Included",
      "Mountain View",
      "Fitness Center",
      "Room Service",
    ],
    pricePerPersonPerNight: 120.0,
  },
  {
    id: 2,
    name: "Cozy Retreat in the Mountains",
    type: "Cottage",
    location: "456 Xoa Street,  Cozy Retreat in the Mountains",
    rating: 4.7,
    description:
      "Escape to nature with this cozy Mountain retreat. Enjoy tranquility and Stunning views while begin surrounded by lush forests and fresh Mountain by lush forests and fresh Mountain air.",
    amenities: [
      "Beach Access",
      "Free Parking",
      "Private Patio",
      "Barbecue Facilities",
      "Air Conditioning",
    ],
    pricePerPersonPerNight: 150.0,
  },
  {
    id: 3,
    name: "Seaside Villa with Private Beach Access",
    type: "Apartment",
    location: "789 Cityscape Blvd, Metropolis",
    rating: 4.3,
    description:
      "Indulge in luxuary with this Stunning seaside villa. Relax on pristine beaches. take a dip in the private pool and soak up the sun in the exulsive coastal retreat",
    amenities: [
      "Free Wi-Fi",
      "Kitchenette",
      "City View",
      "Public Transport Access",
      "Smart TV",
    ],
    pricePerPersonPerNight: 90.0,
  },
  {
    id: 4,
    name: "Modern Loft in the City Center",
    type: "Bed & Breakfast",
    location: "101 Countryside Lane, Greenfields",
    rating: 4.8,
    description:
      "Experience urban living at its finest with modern loft. Conveniently located in the city center, it offer stylese , comfort and easy access to dinning and entertainment options",
    amenities: [
      "Complimentary Breakfast",
      "Free Wi-Fi",
      "Garden View",
      "Pet-Friendly",
      "Fireplace",
    ],
    pricePerPersonPerNight: 110.0,
  },
];

const StaysDetails = () => {
  const { id } = useParams();

  console.log(id);

  const stay = stays.find((stay) => stay.id == id);

  console.log(stay);

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1 className="display-3">{stay.name}</h1>
        <p className="fs-5 fw-light">Type: {stay.type}</p>
        <p className="fs-5 fw-light">Location: {stay.location}</p>
        <p className="fs-5 fw-light">rating: {stay.rating}</p>
        <p className="fs-5 fw-light">{stay.description}</p>
        <hr />
        <h3>Amenities</h3>
        <ul className="list-group py-3">
          {stay.amenities.map((amenitie, index) => (
            <li className="list-group-item" key={index}>
              {amenitie}
            </li>
          ))}
        </ul>
        <p className="fs-5 fw-light">
          Price: ${stay.pricePerPersonPerNight}/Night
        </p>
      </main>
      <Footer />
    </>
  );
};

export default StaysDetails;

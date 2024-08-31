import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Player = () => {
  const players = [
    {
      id: 1,
      name: "Lionel Messi",
      position:"Forward",
      team:"Paris Saint-Germain"
    },
    {
      id: 2,
      name: "Cristiano Ronaldo",
      position: "Forward",
      team: "Manchester United",
    },
    {
      id: 3,
      name: "Neymar Jr",
      position: "Forward",
      team: "Paris, Saint-Germain",
    },
  ];

  return (
    <>
      <Header />
      <main className="container">
        <h1 className="py-3">List Of Employees</h1>
        <ul className="list-group my-4">
          {players.map((player) => (
            <li key={player.id} className="list-group-item">
              <h3>{player.name}</h3>
              <p>{player.position}</p>
              <Link
                className="btn btn-primary"
                to={`/playerdetails/${player.id}`}
              >
                View Details
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer/>
    </>
  );
};

export default Player;

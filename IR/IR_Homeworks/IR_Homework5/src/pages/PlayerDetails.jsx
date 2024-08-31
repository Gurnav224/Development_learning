import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PlayerDetails = () => {
  const { id } = useParams();


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

  const employee = players.find((employee) => employee.id == id);

  delete employee.id;
  const employeeKey = Object.keys(employee);

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1> {employee.name}</h1>
        <ul className="list-group my-3">
          {employeeKey.map((key) => (
            <li className="list-group-item" key={key}>
              <strong>{key}</strong> : {employee[key]}
            </li>
          ))}
        </ul>
      </main>
      <Footer/>
    </>
  );
};

export default PlayerDetails;

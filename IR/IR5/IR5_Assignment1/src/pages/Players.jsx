/* eslint-disable react-refresh/only-export-components */
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

export const playersData = [
  { id: 1, name: "Lionel Messi", position: "Forward", team: "Barcelona" },
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
    team: "Paris Saint-Germain",
  },
  {
    id: 4,
    name: "Kylian Mbappé",
    position: "Forward",
    team: "Paris Saint-Germain",
  },
  {
    id: 5,
    name: "Robert Lewandowski",
    position: "Forward",
    team: "Bayern Munich",
  },
];


const Players = () => {

 const [selectedTeam , setSelectedTeam] = useState('All');

 
 const filterPlayersByTeam = selectedTeam === 'All' ? playersData : playersData.filter((player) => player.team === selectedTeam)

  return (
    <>
      <Header />
      <main className="container my-4">
       <h1 className="display-4 fw-bold">List of Players</h1>

        <div className="form-group my-4">
          <label className="form-label" htmlFor="team">Filter by Team</label>
          <br />
          <select onChange={(event)=> setSelectedTeam(event.target.value)} className="form-select" id="team">
            <option value="All">All Teams</option>
            <option value="Manchester United">Manchester United</option>
            <option value="Paris Saint-Germain">Paris Saint-Germain</option>
            <option value="Bayern Munich">Bayern Munich</option>
          </select>
        </div>

       <ul className="list-group">
        {
          filterPlayersByTeam.map((player)=>(
            <li className="list-group-item" key={player.id}>
              <h3>{player.name}</h3>
              <p>Position: {player.position}</p>
              <p>Team: {player.team}</p>
              <Link to={`/players/${player.id}`} className="btn btn-primary">View Details</Link>
            </li>
          ))
        }
       </ul>
      </main>
      <Footer />
    </>
  );
};

export default Players;

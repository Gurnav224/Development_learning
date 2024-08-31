import { useParams } from "react-router-dom";
import Header from "../components/Header";

const PlayerDetails = () => {
  const { id } = useParams();


  const players = [
    {
      id: 1,
      name: 'Player 1',
      country:'India',
      role:'Batsman'
    },
   {
    id:2,
    name:'Player 2',
    role:'Bowler',
    country:'Australia'
   }
  
  ];


  const player = players.find((player) => player.id == id);

  delete player.id;


  return (
    <>
      <Header />
      <main className="container py-4">
        <h1> Player Details</h1>

       <div className="card">
        <div className="card-header">
          <h2>{player.name}</h2>
        </div>
        <div className="card-body">
          <p><strong>Country: </strong>{player.country}</p>
          <p><strong>Role: </strong>{player.role}</p>
        </div>
       </div>
        
       
        
      </main>
    </>
  );
};

export default PlayerDetails;

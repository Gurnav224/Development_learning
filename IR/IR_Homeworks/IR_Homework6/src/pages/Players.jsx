import Header from "../components/Header";
import { Link } from "react-router-dom";

const Player = () => {
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

  return (
    <>
      <Header />
      <main className="container">
        <h1 className="py-3">List Of Cricket Players</h1>
        <div className="row">
          {
            players.map((player)=>(
              <div key={player.id} className="col-md-7 my-2">
                <div className="card">
                  <div className="card-header">
                    <h2 className="card-title">{player.name}</h2>
                  </div>
                  <div className="card-body">
                    <p><strong>Role: </strong>{player.role}</p>
                    <p><strong>Country: </strong>{player.country}</p>
                    <Link to={`/playerdetails/${player.id}`} className="btn btn-primary">Details</Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </main>
    </>
  );
};

export default Player;

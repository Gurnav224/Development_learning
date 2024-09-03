import Header from '../components/Header'
import Footer from '../components/Footer'
import { playersData } from './Players'
import { useParams } from 'react-router-dom'

const PlayerDetails = () => {

  const {id} = useParams()

  const player = playersData.find((player) => player.id == id )


const playerKeys = Object.keys(player).filter((key)=> key != "id")




  return (

    <>
     <Header/>
     <main className="container my-4">
    <h1 className='display-4 fw-bold'>Players Details</h1>
       <ul className='my-4 list-group'>
       {
        playerKeys.map((playerKey)=>(
          <li className='list-group-item' key={playerKey}>
          <strong>{playerKey} : </strong> {player[playerKey]}
          </li>
        ))
       }
       </ul>
     </main>
     <Footer/> 
    </>
  )
}

export default PlayerDetails

import Header from '../components/Header'
import Footer from '../components/Footer'
import {useParams} from "react-router-dom"
import { foodItemsData } from './Foods'

const FoodDetails = () => {
    const {id} = useParams()
    const food = foodItemsData.find((foodItem) => foodItem.id == id);

  return (

    <>
     <Header/>
     <main className="container my-4">

        <h3>{food.name}</h3>
        <ul className='list-group'>
            <li className='list-group-item' >Name: {food.name}</li>
            <li className='list-group-item' >Calories: {food.calories}</li>
            <li className='list-group-item' >Categories: {food.category}</li>
        </ul>
     </main>
     <Footer/> 
    </>
  )
}

export default FoodDetails

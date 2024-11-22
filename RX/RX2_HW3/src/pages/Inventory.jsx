import { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux"
import { fetchInventory } from "../actions";

const Inventory = () => {
  const inventory = useSelector((state) => state.inventory);
  const dispatch = useDispatch()
  console.log(inventory)

    useEffect(()=> {
        dispatch(fetchInventory())
    },[dispatch])

  return (
    <div>
      <h1>Inventory</h1>
      <ul>
        {
        inventory.map((item , index) => (
          <li key={index}>
            {item.itemName} - {item.itemQuantity}
          </li> 
        ) )
        }
      </ul>
      <h2>Total Inventory Items: {inventory.length}</h2>
    </div>
  )
}

export default Inventory

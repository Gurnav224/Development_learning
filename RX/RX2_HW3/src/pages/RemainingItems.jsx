import { useEffect } from "react";
import { useSelector , useDispatch} from "react-redux"
import { fetchInventory, removedItems } from "../actions";
const RemainingItems = () => {
  const inventory = useSelector((state) => state.inventory);
  const items = useSelector((state) => state.removed_items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInventory())
  },[dispatch])

  useEffect(() => {
    dispatch(removedItems())
  },[dispatch])

  const remainingItem = inventory.length - items.length;
  return (
    <div>
      <h1>Remaining Items in Inventory</h1>
      <h2>Inventory Total: {remainingItem}</h2>
    </div>
  )
}

export default RemainingItems

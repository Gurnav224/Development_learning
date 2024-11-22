import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removedItems } from "../actions";

const RemovedItems = () => {
  const items = useSelector((state) => state.removed_items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removedItems());
  }, [dispatch]);


  return (
    <div>
      <h1>Removed Items from Inventory</h1>
      <ul>
       {
        items.map((item) => (
        <li key={item._id}>
          {item.itemName} - {item.itemQuantity}
        </li>
        ))
       }
      </ul>
      <h2>Removed Items Total: {items.length}</h2>
    </div>
  );
};

export default RemovedItems;

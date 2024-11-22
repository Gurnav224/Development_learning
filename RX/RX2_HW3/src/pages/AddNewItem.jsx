import { useState } from "react";
import { useDispatch} from "react-redux"
import { addItem, addItemToRemove } from "../actions";

const AddNewItem = () => {
  const dispatch = useDispatch()
  const [inventoryData, setInventoryData] = useState({
    itemName: "",
    itemQuantity: 0,
    entryType: "Add To Stroage",
  });

  const inputChangeHandler = (event) => {
    const {name , value} = event.target;
    setInventoryData((prev) => ({
      ...prev,
     [name]: name === "itemQuantity" ? parseInt(value):value
    }))
  }

  const handleAddItem = (e) => {
    e.preventDefault();
      if(inventoryData.entryType=== "Add To Stroage"){
        dispatch(addItem(inventoryData))

        
      }
      else{
        dispatch(addItemToRemove(inventoryData))
      }
  }
  

  return (
    <div>
      <h1>Add New Item</h1>
      <form>
        <div>
          <label htmlFor="item_name">Item Name:</label>
          <input 
          type="text" 
          id="item_name" 
          name="itemName" 
          value={inventoryData.itemName} 
          onChange={inputChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="item_quantity">Item Quantity</label>
          <input 
          type="number" 
          id="item_quantity" 
          name="itemQuantity" 
          value={inventoryData.itemQuantity} 
          onChange={inputChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="entry_type">Entry Type</label>
          <select name="entryType" id="entry_type" onChange={inputChangeHandler}>
            <option value="Add To Stroage" >Add To Stroage</option>
            <option value="Remove from storage">Remove from storage</option>
          </select>
        </div>
        <button onClick={handleAddItem}>Add Item Data</button>
      </form>
    </div>
  );
};

export default AddNewItem;

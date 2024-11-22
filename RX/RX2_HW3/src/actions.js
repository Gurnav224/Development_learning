export const addItem = (item) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://inventory-storage-app-backend-student-neog.replit.app/add-to-store",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    const data = await response.json();

    if (data.success === true) {
      dispatch({ type: "ADD_ITEM", payload: data });
    }
  } catch (error) {
    console.error("error to add new Item ", error);
  }
};

export const addItemToRemove = (item) => async (dispatch) => {
  console.log("removeitem", item);
  try {
    const response = await fetch(
      " https://inventory-storage-app-backend-student-neog.replit.app/remove-from-store",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    const data = await response.json();

    if (data.success === true) {
      dispatch({ type: "ADD_ITEM", payload: data });
    }
  } catch (error) {
    console.error("error to remove item", error);
  }
};



export const fetchInventory = () => async (dispatch) => {
    try {
        const response = await fetch(`https://inventory-storage-app-backend-student-neog.replit.app/storage-items`);
        const data = await response.json();
        if(data){
            dispatch({type:"FETCH_INVENTORY",payload:data})
        }
    } catch (error) {
       console.log('error to fetch the inventory',error) 
    }
}


export const removedItems = () =>  async(dispatch) => {
    try {
        const response = await fetch(`https://inventory-storage-app-backend-student-neog.replit.app/dispatched-from-store`);
        const data = await response.json();
        if(data){
            dispatch({type:"REMOVED_ITEMS",payload:data})
        }
    } catch (error) {
        console.log("error to get removed items from inventory",error)
    }
}
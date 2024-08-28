import { useState } from "react"

const App = () => {

  const [customerName, setCustomerName] = useState("")
  const [pizzaSize , setPizzaSize] = useState("");
  const [toppings , setToppings] = useState([]);
  const [crustType , setCrustType] = useState("");
  const [delivery , setDelivery] = useState("");
  const [instruction , setInstruction] = useState("")

  const [formData , setFormData] = useState(false);

  console.log(toppings)


  const toppingsChangeHandler = (event) =>{
    const {value,checked} = event.target;
    if(checked){
      setToppings([...toppings, value])
    }
    else{
      setToppings(toppings.filter((topping) => topping != value))
    }
  }


  const handleFormSubmit = (event) =>{
    event.preventDefault()
    if(customerName && pizzaSize && toppings && crustType && delivery ) {
      setFormData(true)
    }
  }


  return (
    <div>
      <h1>Pizza Order Form</h1>
      <form onSubmit={handleFormSubmit}>

        <div>
          <label htmlFor="customer_name">Customer Name: </label> 
          <input type="text" name="customer_name" id="customer_name"  required onChange={(event) => setCustomerName(event.target.value)}/>
        </div>

        <div>
          <label htmlFor="size">Choose Pizza Size: </label>
          <select name="size" id="size" required onChange={(event) => setPizzaSize(event.target.value)}>
            <option value="">select size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        <div>
          <label>choose toppings:</label>
          <br />
          <label htmlFor="Pepperoni">
            <input type="checkbox" name="toppings" id="Pepperoni"  value="Pepperoni" onChange={toppingsChangeHandler} />Pepperoni
          </label>
          <br />
          <label htmlFor="Mushrooms">
            <input type="checkbox" name="toppings" id="Mushrooms"  value="Mushrooms" onChange={toppingsChangeHandler}/>Mushrooms
          </label>
          <br />
          <label htmlFor="Olives">
            <input type="checkbox" name="toppings" id="Olives"  value="Olives" onChange={toppingsChangeHandler}/> Olives
          </label>
        </div>

        <div>
          <label htmlFor="type">Choose Crust Type:</label>

          <br />
          <label htmlFor="thin">
            <input type="radio" name="type" id="thin" value="Thin" required  onChange={(event) => setCrustType(event.target.value)}/>Thin
          </label>
          <br />
          <label htmlFor="Thick">
            <input type="radio" name="type" id="Thick" value="Thick" required onChange={(event) => setCrustType(event.target.value)}/>Thick
          </label>

        </div>

        <div>
          <label htmlFor="delivery">Choose Delivery Option: </label>
          <br />
          <label htmlFor="Pickup">
            <input type="radio" name="delivery" id="Pickup" value="Pickup" required onChange={(event)=>setDelivery(event.target.value)}/>Pickup
          </label>
          <br />
          <label htmlFor="Delivery">
            <input type="radio" name="delivery" id="Delivery" value="Delivery" onChange={(event)=>setDelivery(event.target.value)}/>Delivery
          </label>
        </div>


        <div>
          <label htmlFor="instruction">Special Instructions: (if any)</label> <br />
          <textarea onChange={(event)=>setInstruction(event.target.value)} name="instruction" id="instruction" cols="30" rows="10"></textarea>
        </div>

      <button type="submit">Place Order</button>
      </form>
      {
        formData && (
          <div>
            <p>Customer Name: {customerName}</p>
            <p>Pizza Size: {pizzaSize}</p>
            <p>Toppings: {toppings.join(", ")}</p>
            <p>Crust Type: {crustType}</p>
            <p>Delivery : {delivery}</p>
            <p>Sepecial Instruction: {instruction ? instruction : "none"}</p>
          </div>
        )
      }
    </div>
  )
}

export default App

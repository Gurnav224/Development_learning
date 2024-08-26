import { useState } from "react";


const SelectGender = ()=>{
  
  const [gender , setGender] = useState("")

  const onChaneHandler = (event)=>{
    setGender(event.target.value)
  }
  return(
    
    <>
<form onChange={onChaneHandler}>
      <label>Select Gender: </label>
      <br />

      <input type="radio" value="Male" name="gender" /> Male
      <br />
      <input type="radio" value="Female" name="gender" /> Female
      <br />
      <input type="radio" value="Others" name="gender" /> Others
    </form>
    
    <p>Selected Gender: {gender}</p>
        </>
  )
}


const MealPerference = () =>{
  const [meal , setMeal] = useState("")

  const onChaneHandler  = (event)=>{
    setMeal(event.target.value)
  }
  return(
    <>
      <form onChange={onChaneHandler}>
        <label>choose your meal preference: </label>
        <br />
        <input type="radio" name="meal" value="Vegetarian" /> Vegetarian
        <br />
        <input type="radio" name="meal" value="Non-Vegetarian" /> Non-Vegetarian 

      </form>
      <p>selected Meal preference: {meal}</p>
    </>
  )
}

function App() {
  return (
    <>
   <SelectGender/>
   <MealPerference/>
    </>
  );
}

export default App;

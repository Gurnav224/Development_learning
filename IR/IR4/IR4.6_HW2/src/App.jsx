import { useState } from "react";


const SelectSize  = ()=>{
  const [selectedSize , setSelectedSize] = useState("")

  const handleChange = (event) =>{
    setSelectedSize(event.target.value)
  }

  const sizeDetails = {
    Small:"Fits chest size 34-36 inches",
    Medium:"Fits chest size 38-40 inches",
    Large:"Fits chest size 42-44 inches"
  }

  return(
    <>
      <label htmlFor="size">Select a Clothing Size </label>
      <select name="size" id="size" onChange={handleChange}>
        <option value="" selected >Select Size</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      {selectedSize && <p>Descripton: {selectedSize}:-{sizeDetails[selectedSize]}</p>}
    </>
  )
}


const SelectJobType = () =>{

  const [selectedType , setSelectedType] = useState("")

  const handleChange = (event) =>{
    setSelectedType(event.target.value)
  }

  const jobs  = {
    "Full-Time":"Employement for a standard 40-hour workweek",
    "Part-Time":"Employment for less than a standard workweek ",
    "Contract":"Temporary  employment (for a specific project or period)"
  }

  return(
    <>
      <label htmlFor="type">Select a job type:</label>
      <select name="type" id="type" onChange={handleChange}>
        <option value="">Select JobType</option>
        <option value="Full-Time">Full-Time</option>
        <option value="Part-Time">Part-Time</option>
        <option value="Contract">Contract</option>
      </select>

      {selectedType && <p>Description: {jobs[selectedType]}</p>}
    </>
  )
}

const SelectMeal = () =>{
  const [selectedMeal , setSelectedMeal] = useState("")
  const handleChange = (event)=>{
    setSelectedMeal(event.target.value)
  }

  let meals = {
    BreakFast:"Morning meal typically eaten before starting the day",
    Lunch:"Midday Meal typically eaten around noon",
    Dinner:"Evening Meal typically eaten around end of the day"
  }

  return(
    <>
      <label htmlFor="meal">Select a meal time ? </label>
      <select name="meal" id="meal" onChange={handleChange}>
        <option value="BreakFast">BreakFast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
      </select>
        {selectedMeal && <p>Description: {selectedMeal}:-{meals[selectedMeal]}</p>}
    </>
  )
}

const SkillLevel = () =>{
  const [selectedSkill , setSelectedSkill] = useState("")

  const handleChange = (event) =>{
    setSelectedSkill(event.target.value)
  }
  const skills = {
    Beginner:"Just starting out, limited experience or knowledge",
    Intermediate:"Some experience or knowledge, moderate skill level",
    Advanced:"Extensive experience or Knowledge, high skill level"
  }
  return(
    <>
      <label htmlFor="skill">select your skill level</label>
      <select onChange={handleChange} name="skill" id="skill">
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
      {selectedSkill && <p>Description: {selectedSkill}: {skills[selectedSkill]}</p>}
    </>
  )
}

const SelectTemperature = () => {
  const [selectedUnit, setSelectedUnit] = useState("")

  const units = {
    Celsius:"Temperature Scale in which water freeze at 0 degrees and boils at 100 degrees",
    Fahrenheit:"Temperature scale widely used in the United states",
    Kelvin:"Absolute temperature scale with 0 representing absolute Zero"
  }

  const handleChange = (event) =>{
    setSelectedUnit(event.target.value)
  }

  return(
    <>
      <label htmlFor="temperature">Select a temperature unit: </label>
      <select onChange={handleChange} name="temperature" id="temperature">
        <option value="Celsius">Celsius</option>
        <option value="Fahrenheit">Fahrenheit</option>
        <option value="Kelvin">Kelvin</option>
      </select>
      {selectedUnit && <p>Description: {selectedUnit}: {units[selectedUnit]}</p>}
    </>
  )
}

function App() {
  return (
    <>
    <SelectSize/>
    <br />
    <SelectJobType/>
    <br />
    <SelectMeal/>
    <br />
    <SkillLevel/>
    <br />
    <SelectTemperature/>


    </>
  );
}

export default App;

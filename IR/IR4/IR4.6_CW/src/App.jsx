import { useState } from "react";

const ColorSelect = () =>{
  const [color  , setColor] = useState('')
  const onChangeColorHandler = (event) =>{
    setColor(event.target.value)
  }
  return (
    <div>
      <label id="color">Select Color</label>
      <br />
      <select id="color" onChange={onChangeColorHandler}>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
      </select>
      {color && <p>Color Selected: <span style={{color:color}}>{color}</span></p>}
    </div>
  )
}

const SelectDay = ()=>{
  const [day , setDay] = useState('');
  const onChangeDayHandler = (event)=>{
    setDay(event.target.value)
  }
  return(
    <div>
      <label id="days">Select Day:</label>
      <br />
      <select id="days" onChange={onChangeDayHandler}>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
      </select>
<br />
<br />

      {
        day && (day==="Sunday" || day==="Saturday" ? `${day} is weekend`:`${day} is weekday`)
      }

    </div>
  )
}


function App() {
  return (
    <>
    <ColorSelect/>
    <br />

    <SelectDay/>
   
    </>
  );
}

export default App;

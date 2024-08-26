/* eslint-disable react/prop-types */

import { useState } from "react";


const SelectChoice = ({title , options,name}) =>{
  const [selectedOption , setSelectedOption] = useState("")

  const onChangeHandler = (event)=>{
    setSelectedOption(event.target.value)
  }

  return(
    <>
      <form onChange={onChangeHandler}>
        <label>{title}</label>
        {
          options.map((option)=>(
            <div key={option}>

            <input
             name={name}
             value={option}
             id={`${name}-${option}`}
             type="radio"
              />
              <label htmlFor={`${name}-${option}`}>{option}</label>
            </div>
           
          ))
        }
      </form>
      {selectedOption && <p>Selected {name}: {selectedOption}</p>}
      <br />

    </>
  )
}


const choices = [
  {
    title:'select your proficiency in programming language',
    name:'progrmming',
    option:['Beginner','Intermediate','Advanced']
  }
  ,
  {
    title:'select your dream travel destination',
    name:'travel',
    option:['Beach','Mountain','City']
  },
  {
    title:'select your coffee preference',
    name:'coffee',
    option:['Black Coffee','Latte','Cappauccion']
  },
  {
    title:'select your preferred pet',
    name:'pet',
    option:['Dog','Cat','Fish']
  },
  {
    title:'select your favourite sport',
    name:'sport',
    option:['Football','BasketBall','Tennis']
  }
]
function App() {
  return (
    <>
    {
      choices.map((choice , index)=>(
        <SelectChoice
        title={choice.title}
        key={index}
        options={choice.option}
        name={choice.name}
        />
      ))
    }
    </>
  );
}

export default App;

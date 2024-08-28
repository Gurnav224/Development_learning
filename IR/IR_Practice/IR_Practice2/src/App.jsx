/* eslint-disable react/prop-types */

import { useState } from "react";

const InputRadio = ({ question, options, setSelecteOption }) => {
  return (
    <div>
      <h3>{question}</h3>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <label htmlFor={question}>
              <input
                type="radio"
                name={question}
                id={question}
                value={option}
                onChange={(e)=>setSelecteOption(e.target.value)}
                required
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  const questions = [
    {
      id: 1,
      question: "Favorite Color?",
      options: ["Red", "Blue", "Green", "Yellow"],
    },
    {
      id: 2,
      question: "Favorite Animal?",
      options: ["Dog", "Cat", "Bird", "Fish"],
    },
    {
      id: 3,
      question: "Favorite Food?",
      options: ["Pizza", "Burger", "Pasta", "Salad"],
    },
  ];

  const [selecteOption, setSelecteOption] = useState("");
  const [formState , setFormState] = useState(true)


  const handleFormSubmit = (event) =>{
    event.preventDefault()
    if(selecteOption){
      setFormState(false)
    }
  }

  return (
    <>
      <h1>Polling App</h1>
     

      {
        formState ? (
          <form onSubmit={handleFormSubmit}>
        {questions.map((question) => (
          <InputRadio
            key={question.id}
            question={question.question}
            options={question.options}
            setSelecteOption={setSelecteOption}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
        ):(
          <h2>Thanks for participating ? </h2>

        )
      }
    </>
  );
}

export default App;

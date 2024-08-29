import { useState } from "react";

const FoodSurveyApp = () => {
  const continents = {
    Asian: ["Chinese", "Japanese", "Indian"],
    European: ["Italian", "French", "Spanish"],
    American: ["Burgers", "Pizza", "BBQ"],
  };

  const [selectedContinent, setSelectedContinent] = useState("");
  const [selectedOption, setSelectedOption] = useState([]);
  const [formState, setFormState] = useState(true);

  const cuisineChangeHandler = (event) => {
    const { checked, value } = event.target;
    if (checked) {
      setSelectedOption((prev) => [...prev, value]);
    } else {
      setSelectedOption(selectedOption.filter((cusine) => cusine != value));
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!selectedContinent || !selectedOption) {
      alert("Please select both cuisine and options ");
      return;
    }

    setFormState(false);
  };

  return (
    <div>
      <h1>Food Survey App</h1>
      {formState ? (
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="cuisine">Select your Preferred Cuisine: </label>
            <select
              onChange={(event) => setSelectedContinent(event.target.value)}
              name="cuisine"
              id="cuisine"
            >
              <option value="">Select Cuisine: </option>
              <option value="Asian">Asian</option>
              <option value="European">European</option>
              <option value="American">American</option>
            </select>
          </div>
          <br />
          {selectedContinent && (
            <div>
              <label>Select your Preferred Options: </label>
              <br />
              {continents[selectedContinent]?.map((cusine, index) => (
                <label key={index} htmlFor={`${cusine}-${index}`}>
                  <br />
                  <input
                    type="checkbox"
                    name={cusine}
                    id={`${cusine}-${index}`}
                    value={cusine}
                    onChange={cuisineChangeHandler}
                  />
                  {cusine}
                </label>
              ))}
            </div>
          )}
          <br />

          <button>submit</button>
        </form>
      ) : (
        <>
          <h2>Thanks for sharing your preference !</h2>
          <p>Cuisine: {selectedContinent}</p>
          <p>Preferred Options: {selectedOption.join(", ")}</p>
        </>
      )}
    </div>
  );
};


export default FoodSurveyApp
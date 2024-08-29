import { useState } from "react";

const TravelDestination = () => {
  const continents = {
    Asia: ["India", "Japan", "Thailand"],
    Europe: ["France", "Italy", "Spain"],
    "North America": ["USA", "Canada", "Mexico"],
  };

  const [selectContinent, setSelectedContinents] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [formState, setFormState] = useState(true);

  const handleChange = (event) => {
    setSelectedContinents(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectContinent || !selectedDestination) {
      alert("Please select both a continent and a destination.");
      return;
    }
    setFormState(false);
  };

  return (
    <div>
      <h1>Travel Destination App</h1>

      {formState ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="continents">
              Select your Preferred Continent:{" "}
            </label>
            <select name="continents" id="continents" onChange={handleChange}>
              <option>Select Continent</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="North America">North America</option>
            </select>
          </div>

          {selectContinent && (
            <div>
              <p>Select your Preferred Destionation</p>
              <ul>
                {continents[selectContinent]?.map((country, index) => (
                  <li key={index}>
                    <label htmlFor={`${country}-${index}`}>
                      <input
                        type="radio"
                        name={selectContinent}
                        id={`${country}-${index}`}
                        value={country}
                        onChange={(event) =>
                          setSelectedDestination(event.target.value)
                        }
                      />
                      {country}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
          <h2>Thank you for sharing your preferences ? </h2>
          <p>Preferred Continent: {selectContinent}</p>
          <p>Preferred Destination: {selectedDestination}</p>
        </>
      )}
    </div>
  );
};

const MusicPreferences = () => {
  const genres = {
    Rock: ["Classical Rock", "Alternative Rock", "Indie Rock"],
    Pop: ["Pop Rock", "Synth Pop", "Electropop"],
    "Hip Hop": ["East Cost Hip Hop", "West Cost Hip Hop", "Trap Music"],
  };

  const [formState, setFormState] = useState(true);

  const [selectedGenre, setSelectedGenre] = useState("");
  const [subgenre , setSubGenre] = useState("")



  const handleSubmit = (event) =>{
    event.preventDefault();
    if(!selectedGenre || !subgenre){
      alert('Please select both genre and subgenre')
      return 
    }
    setFormState(false)
  }

  return (
    <>
      <h1>Music Preference App</h1>
      {formState ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="genre">Select your Preferred Genre:</label>
            <select
              name="genre"
              id="genre"
              onChange={(event) => setSelectedGenre(event.target.value)}
            >
              <option>select genre</option>
              <option value="Rock">Rock</option>
              <option value="Pop">Pop</option>
              <option value="Hip Hop">Hip Hop</option>
            </select>
          </div>
          {selectedGenre && (
            <div>
              <p>Select your preferred subgenre : </p>
              <ul>
                {selectedGenre &&
                  genres[selectedGenre]?.map((genre, index) => (
                    <li key={index}>
                      <label htmlFor={`${genre}-${index}`}>
                        <input
                          type="radio"
                          name={selectedGenre}
                          id={`${genre}-${index}`}
                          value={genre}
                          onChange={(event) => setSubGenre(event.target.value)}
                        />{" "}
                        {genre}
                      </label>
                    </li>
                  ))}
              </ul>
            </div>
          )}
          <button type="submit">Submit</button>
        </form>
      ) : (
        <>
          <h2>Thank you for sharing Your Preference! </h2>
          <p>Selected Genre: {selectedGenre}</p>
          <p>Selected Sub Genre: {subgenre}</p>
        </>
      )}
    </>
  );
};

const App = () => {
  return (
    <div>
      <TravelDestination />
      <MusicPreferences />
    </div>
  );
};

export default App;

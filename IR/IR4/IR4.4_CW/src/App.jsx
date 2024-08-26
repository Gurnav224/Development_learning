import { useState } from "react";

const SelectedLanguages = () => {
  const [languages, setLanguages] = useState([]);

  function handleChange(event){
    const {value , checked} = event.target;

    if(checked){
      setLanguages((prev)=>[...prev,value])
    }
    else{
      setLanguages(languages.filter(lang => lang !=value))
    }
  }
  
  return (
    <>
      <label htmlFor="Javascript">
        <input
          type="checkbox"
          name="language"
          id="JavaScript"
          value="Javascript"
          onChange={handleChange}
        />{" "}
        Javascript
      </label>
      <label htmlFor="Python">
        <input type="checkbox" name="language" id="Python" value="Python" 

          onChange={handleChange}
        />
        Python
      </label>
      <label htmlFor="Javascript">
        <input type="checkbox" name="language" id="Java" value="Java"
        onChange={handleChange} /> Java
      </label>
      <p>Selected Langauges: {languages.join(", ")}</p>
    </>
  );
};


const MusicGenre = ()=>{
  const [genres, setGenre] = useState([]);

  const handleChange = (event) =>{
    const {value, checked} = event.target;

    if(checked){
      setGenre((prev)=>[...prev,value])
    }
    else{
      setGenre(genres.filter(genre => genre != value))
    }
  }

  return(
    <>
      <label htmlFor="Rock">
        <input type="checkbox"  id="Rock" value="Rock" name="genre" onChange={handleChange} />
        Rock
      </label>
      <label htmlFor="Jazz">
        <input type="checkbox"  id="Jazz" value="Jazz" name="genre"  onChange={handleChange}/>
        Jazz
      </label>
      <label htmlFor="Pop">
        <input type="checkbox"  id="Pop" value="Pop" name="genre"  onChange={handleChange}/>
        Pop
      </label>

      <p>Choose Genre: {genres.join(", ")}</p>
    </>
  )
}

function App() {
  return (
    <>
      <SelectedLanguages />
      <MusicGenre/>
    </>
  );
}

export default App;

import { useState } from "react";


const SelectInstrument = ()=>{
  const [selecteInstrument , setSelectedInstrument] = useState("")

  const instrumentChangeHandler = (event)=>{
    setSelectedInstrument(event.target.value)
  }


  return(
    <>
      <label htmlFor="instrument">Select a musical instrument</label>
      <select name="instrument" id="instrument" onChange={instrumentChangeHandler}>
      <option value="" selected>Selected Instrument</option>
        <option value="Guitar">Guitar</option>
        <option value="Piano">Piano</option>
        <option value="Drums">Drums</option>
      </select>
      {selecteInstrument && <p>Type: {selecteInstrument}</p>}
      <br />
    </>
  )
}


const SelectLanguage = () => {

  const [selectedLanguage , setSelectedLanguage] = useState("")

  let languageDiscovery = {
    English:"England",
    Spanish:"Spain",
    French:"France"
  }

  const handleChange = (event) =>{
    setSelectedLanguage(event.target.value)
  }

  return(
    <>
      <label htmlFor="language">Select a language ? </label>
      <select onChange={handleChange} name="language" id="language">
        <option value="" selected>Select Language</option>
        <option value="English">English</option>
        <option value="Spanish">Spanish</option>
        <option value="French">France</option>
      </select>
      {languageDiscovery[selectedLanguage] && <p>Origin: {languageDiscovery[selectedLanguage]}</p>}
      <br />
          </>
        
  )
}


const SelectCarBrand = ()=>{
  const [selectedBrand , setSelectedBrand] = useState("")
  const brandDetails = {
    Audi:"Audi AG is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany",
    BMW:"Bayerische Motoren Werke AG, commonly abbreviated to BMW, is a German multinational manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany.",
    Tesla:"Tesla, Inc is an American multinational automotive and clean energy company. Headquartered in Austin, Texas, "
  }

  const handleChange = (event) =>{
    setSelectedBrand(event.target.value)
  }

  console.log(selectedBrand)
  return(
    <>
      <label htmlFor="brand" >Select Car brand: </label>

      <select name="brand" id="brand" onChange={handleChange}>
      <option value="" selected>Select Brand</option>
        <option value="Audi">Audi</option>
        <option value="BMW">BMW</option>
        <option value="Tesla">Tesla</option>
      </select>

      {selectedBrand  && <p>Details: {brandDetails[selectedBrand]}</p>}
      <br />
    </>
  )
}

const SelectContinent = ()=>{

  const [selectedContinent , setSelectedContinent] = useState("");

  let continents = {
    Europe:"Europe is a continent located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. ",
    Asia:"Asia is the largest continent in the world by both land area and population. It covers an area of more than 44 million square kilometers, about 30% of Earth's total land area and 8% of Earth's total surface area",
    Africa:"Africa is the world's second-largest and second-most populous continent after Asia. At about 30.3 million km² including adjacent islands, it covers 20% of Earth's land area and 6% of its total surface area. With nearly 1.4 billion people as of 2021, it accounts for about 18% of the world's human population."
  }

  const handleChange = (event) =>{
    setSelectedContinent(event.target.value)
  }

  return(
    <>
      <label htmlFor="continent">Select a continent: </label>
      <select onChange={handleChange} name="continent" id="continent">
        <option value="" selected>Select Continent</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
      </select>
      {selectedContinent && <p>Details: {continents[selectedContinent]} </p>}
    </>
  )
}

const SelectMovie = ()=>{
  const [selectedGenre , setSelectedGenre] = useState("")

  const handleChange = (event) =>{
    setSelectedGenre(event.target.value)
  }

  const genres = {
    Action:"Films with exciting and fast-paced sequences",
    Drama:"Films with serious themes and emotions",
    Comedy:"Films intended to make the audience laugh"
  }

  return(
    <>
      <br />

      <label htmlFor="genre">Select a movie Genre: </label>
      <select name="genre" id="genre" onChange={handleChange}>
          <option value="">Select Genre:</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
      </select>      
      {selectedGenre && <p>Description: {selectedGenre}:- {genres[selectedGenre]}</p>}
    </>
  )
}


function App() {
  return (
    <>
   <SelectInstrument/>

   <br />
   <SelectLanguage/>
<br />
   <SelectCarBrand/>
   <br />
   <SelectContinent/>
   <br />
   <SelectMovie/>
    </>
  );
}

export default App;

import { useState } from "react";

const ChooseFavouriteSport = () => {
  const [sports, setSports] = useState([]);
  const handleChange = (event) => {
    const { checked, value } = event.target;

    if (checked) {
      setSports((prev) => [...prev, value]);
    } else {
      setSports(sports.filter((sport) => sport !== value));
    }
  };

  return (
    <>
      <label htmlFor="games">choose your favourite sports</label>
      <div>
        <label htmlFor="football">
          <input
            type="checkbox"
            name="football"
            id="football"
            onChange={handleChange}
            value="football"
          />
          Football
        </label>
      </div>
      <div>
        <label htmlFor="basketball">
          <input
            type="checkbox"
            name="basketball"
            id="basketball"
            onChange={handleChange}
            value="basketball"
          />
          Basketball
        </label>
      </div>
      <div>
        <label htmlFor="tennis">
          <input
            type="checkbox"
            name="tennis"
            id="tennis"
            onChange={handleChange}
            value="tennis"
          />
          Tennis
        </label>
      </div>
      <div>
        <label htmlFor="swimming">
          <input
            type="checkbox"
            name="swimming"
            id="swimming"
            onChange={handleChange}
            value="swimming"
          />
          Swimming
        </label>

      </div>
      {sports.length > 0 && <p>selected sports: {sports.join(", ")}</p>}

    </>
  );
};

const ChooseFavouriteColors = () => {
  const [colors , setColors] = useState([])

  const handleChange = (event) =>{
    const {checked , value} = event.target;

    if(checked){
      setColors((prevColor) => [...prevColor,value])
    }
    else{
      setColors(colors.filter((color)=>color !== value))
    }
  }


  return (
    <>
      <label htmlFor="colors">choose your favourite colors</label>
      <div>
        <label htmlFor="Red">
          <input type="checkbox" name="Red" id="Red" value="Red"  onChange={handleChange} /> Red
        </label>
      </div>

      <div>
        <label htmlFor="Blue">
          <input type="checkbox" name="Blue" id="Blue" value="Blue" onChange={handleChange}/> Blue
        </label>
      </div>

      <div>
        <label htmlFor="Green">
          <input type="checkbox" name="Green" id="Green" value="Green" onChange={handleChange} /> Green
        </label>
      </div>

      <div>
        <label htmlFor="Yellow">
          <input type="checkbox" name="Yellow" id="Yellow" value="Yellow"  onChange={handleChange}/>{" "}
          Yellow
        </label>
      </div>

      {colors.length > 0 && <p>selected colors: {colors.join(", ")}</p>}

    </>
  );
};

const ChooseMusicalInstrument = () =>{
  const [instruments , setInstruments] = useState([])
  const handleChange = (event) =>{
    const {checked ,value} = event.target;
    if(checked){
      setInstruments((prev)=>[...prev,value])
    }
    else{
      setInstruments(instruments.filter((instrument)=>instrument!==value))
    }
  }

  return(
    <>
      <label htmlFor="instruments">choose musical instruments: </label>
      <div>
        <label htmlFor="guitar">
        <input type="checkbox" name="guitar" id="guitar" value="guitar" onChange={handleChange}/>
        Guitar
        </label>
      </div>
      <div>
        <label htmlFor="piano">
        
        <input type="checkbox" name="piano" id="piano" value="piano" onChange={handleChange}/>
        Piano</label>
      </div>
      <div>
        <label htmlFor="drums">
        
        <input type="checkbox" name="drums" id="drums" value="drums" onChange={handleChange}/>
        Drums</label>
      </div>
      {instruments.length > 0 && <p>selected Instruments: {instruments.join(", ")}</p>}
    </>
  )
}


const ChooseFavouriteAnimal = (event) =>{
 const [animals, setAnimals] = useState([]);

 const handleChange = (event) =>{
  const {checked , value} = event.target;
  if(checked){
    setAnimals((prev)=>[...prev,value])
  }
  else{
    setAnimals(animals.filter((animal) => animal != value))
  }
 }

 return(
  <>
    <label htmlFor="animals">Choose your favourite animals ? </label>
    <div>
      <label htmlFor="dog">
        <input type="checkbox" name="dog" id="dog" value="dog"  onChange={handleChange}/>
        Dog
      </label>
    </div>
    <div>
      <label htmlFor="cat">
        <input type="checkbox" name="cat" id="cat" value="cat"  onChange={handleChange}/>
        Cat
      </label>
    </div>
    <div>
      <label htmlFor="rabbit">
        <input type="checkbox" name="rabbit" id="rabbit" value="rabbit" onChange={handleChange} />
        rabbit
      </label>
    </div>
    {animals.length> 0  && <p>selected animal: {animals.join(", ")}</p>}
  </>
 )
}


const ChooseFavouriteCars = (event) =>{
  const [cars , setCars] = useState([])

  const handleChange = (event) =>{
    const {checked , value} = event.target;
    if(checked){
      setCars((prev)=>[...prev , value])
    }
    else{
      setCars(cars.filter((car)=>car != value))
    }
  }

  return(
    <>
      <label htmlFor="">choose favourite cars</label>
      <div>
        <label htmlFor="mercedes">
        <input type="checkbox" name="mercedes" id="mercedes" value="mercedes" onChange={handleChange}/>
        Mercedes</label>
        
      </div>
      <div>
        <label htmlFor="BMW">
        <input type="checkbox" name="BMW" id="BMW" value="BMW" onChange={handleChange}/>
        BMW</label>
        
      </div>
      <div>
        <label htmlFor="Audi">
        <input type="checkbox" name="Audi" id="Audi"  value="Audi" onChange={handleChange}/>
        Audi</label>
        
      </div>

      {cars.length > 0 && <p>selected cars: {cars.join(", ")}</p>}
    </>
  )
}

function App() {
  return (
    <>
      <ChooseFavouriteSport />
      <br />
      <ChooseFavouriteColors />
      <br />
      <ChooseMusicalInstrument/>
      <br />
      <ChooseFavouriteAnimal/>
      <br />
      <ChooseFavouriteCars/>
    </>
  );
}

export default App;

import { useState } from "react";

const ChooseMovies = () =>{
  const [genres , setGenre] = useState([])


    const handleChange = (event) =>{

      const {checked , value} = event.target

      if(checked){
        setGenre((prev) => [...prev , value])
      }
      else{
        setGenre(genres.filter(genre => genre!= value))
      }
    }
  return(
    <>
      <label htmlFor="movies">choose your favourite movies ? </label>
      <div>
        <label htmlFor="action">

        <input type="checkbox" name="action" id="action" value="action" onChange={handleChange} />
        Action
        </label>
      </div>
      <div>
        <label htmlFor="comedy">

        <input type="checkbox" name="comedy" id="comedy" value="comedy" onChange={handleChange} />
        Comedy
        </label>
      </div>
      <div>
        <label htmlFor="Drama">

        <input type="checkbox" name="Drama" id="Drama" value="Drama" onChange={handleChange} />
        Drama
        </label>
      </div>
      {genres.length > 0  && <p>selected genres: {genres.join(", ")}</p>}
    </>
  )
}

const ChooseFruits = () =>{
  const [fruits , setFruits] = useState([])
  const handleChange = (event) =>{
    const {checked , value} = event.target;

    if(checked){
      setFruits((prev)=>[...prev , value])
    }
    else{
      setFruits(fruits.filter(fruit => fruit!= value))
    }
  }
  return(
    <>
      <label htmlFor="fruits">Choose your favourite Fruits: </label>
      <div>
        <label htmlFor="Apple">
          <input type="checkbox" name="Apple" id="Apple" value="Apple" onChange={handleChange}/>
          Apple
        </label>
      </div>
      <div>
        <label htmlFor="Banana">
          <input type="checkbox" name="Banana" id="Banana" value="Banana" onChange={handleChange}/>
Banana
        </label>
      </div>
      <div>
        <label htmlFor="Orange">
          <input type="checkbox" name="Orange" id="Orange" value="Orange" onChange={handleChange}/>
Orange
        </label>
      </div>
      {fruits.length > 0  && <p>selected fruits: {fruits.join(", ")}</p>}
    </>
  )
}

const ChooseDrinks = () =>{
  const [drinks , setDrinks] = useState([]);


  const handleChange = (event) =>{
    const {checked , value} = event.target;
    if(checked){
      setDrinks((prev) => [...prev , value])
    }
    else{
      setDrinks(drinks.filter(drink => drink != value))
    }
  }

  return(
    <>
      <label htmlFor="drinks">choose your favourite drinks</label>
      <div>
        <label htmlFor="coffee">
          <input type="checkbox" name="coffee" id="coffee" value="coffee" onChange={handleChange} />
          Coffee
        </label>
      </div>
      <div>
        <label htmlFor="Tea">
          <input type="checkbox" name="Tea" id="Tea" value="Tea" onChange={handleChange}/>
      Tea
        </label>
      </div>
      <div>
        <label htmlFor="Juice">
          <input type="checkbox" name="Juice" id="Juice" value="Juice" onChange={handleChange} />
      Juice
        </label>
      </div>
      {drinks.length > 0 && <p>selected drinks: {drinks.join(", ")}</p>}
    </>
  )
}

const ChooseDeserts = () =>{
  const [deserts , setDeserts] = useState([])
  const handleChange = (event) =>{
    const {checked ,value} = event.target;

    if(checked){
      setDeserts((prev) => [...prev ,value])
    }
    else{
      setDeserts(deserts.filter(desert => desert != value))
    }
  }
  return(
    <>
      <label htmlFor="deserts">choose your favourite deserts</label>
      <br />
     <div>
     <label htmlFor="Cake">
      <input type="checkbox" name="Cake" id="Cake" value="Cake" onChange={handleChange}/>
      Cake
      </label>
     </div>
     <div>
     <label htmlFor="Ice_Cream">
      <input type="checkbox" name="Ice_Cream" id="Ice_Cream" value="Ice_Cream" onChange={handleChange}/>
      Ice Cream
      </label>
     </div>
     <div>
     <label htmlFor="Pie">
      <input type="checkbox" name="Pie" id="Pie" value="Pie"  onChange={handleChange}/>Pie
      </label>
     </div>
     {deserts.length > 0 && <p>selected deserts: {deserts.join(", ")}</p>}
    </>
  )
}
const ChooseFavouriteBook = () =>{
    const [genres , setGenres] = useState([]);
    const handleChange = (event) =>{
      const {checked , value} = event.target
      if(checked){
        setGenres((prev)=> [...prev , value])
      }
      else{
        setGenres(genres.filter(genre => genre != value))
      }
    }
  return(
    <>
      <label htmlFor="books">choose your favourite Book genre;</label>
      <br />
     <div>
     <label htmlFor="Fiction">
      <input type="checkbox" name="Fiction" id="Fiction" value="Fiction" onChange={handleChange}/>Fiction
      </label>
     </div>
     <div>
     <label htmlFor="Mystery">
      <input type="checkbox" name="Mystery" id="Mystery" value="Mystery" onChange={handleChange}/>Mystery
      </label>
     </div>
     <div>
     <label htmlFor="Biography">
      <input type="checkbox" name="Biography" id="Biography" value="Biography" onChange={handleChange}/>Biography
      </label>
     </div>
     {genres.length > 0      && <p>selected book genres: {genres.join(", ")}</p>}
    </>
  )
}

function App() {
  return (
    <>
    <ChooseMovies/>
    <br />
    <ChooseFruits/>
    <br />
    <ChooseDrinks/>
    <br />
    <ChooseDeserts/>
    <br />
    <ChooseFavouriteBook/>
    </>
  );
}

export default App;

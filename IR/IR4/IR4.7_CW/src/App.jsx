import { useState } from "react";

function App() {
  const [name,setName] = useState("");
  const [address , setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [interests , setInterest] = useState([]);
  const [color , setColor] = useState("")

  const [formdata, setFormdata] = useState(false)


  const interestHandler  = (event) =>{
    const {checked, value} = event.target;
    if(checked){
      setInterest((prev)=>([...prev , value]))
    }
    else{
      setInterest(interests.filter(interest => interest != value))
    }
  }
  console.log(interests)


  const handleFormSubmit =  (event) =>{
    event.preventDefault();
  
    if(name && address && gender && interests && color){
      setFormdata(true)
    }
  }

  return (
    <>
      <form  onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input 
          type="text" 
          name="name" 
          id="name" 
            onChange={(event)=>setName(event.target.value)}
          />
        </div>
        <br />
        <br />
        <div>
          <label htmlFor="address">Address:</label> <br />
          <textarea
           name="address"
            id=""
             cols="30"
              rows="10"
              onChange={(event) => setAddress(event.target.value)}
              ></textarea>
        </div>
        <br />
        <br />

        <div>
          <label htmlFor="gender">Gender:</label>
          <br />
          <label htmlFor="Male">
            <input type="radio" name="Gender" id="Male" value="Male" onChange={(event)=>setGender(event.target.value)} />
            Male
          </label>
          <br />
          <label htmlFor="Female">
            <input type="radio" name="Gender" id="Female" value="Female" onChange={(event) => setGender(event.target.value)}/>
            Female
          </label>
          <br />
          <label htmlFor="Other">
            <input type="radio" name="Gender" id="Other" value="Other" onChange={(event)=>setGender(event.target.value)} />
            Other
          </label>
          <br />
        </div>

        <br />
        <br />
        <div>
          <label htmlFor="interest">Interest: </label>
          <br />
          <label htmlFor="Reading">
            <input
              type="checkbox"
              name="Interest"
              id="Reading"
              value="Reading"
              onChange={interestHandler}
            />
            Reading
          </label>
          <br />
          <label htmlFor="Singing">
            <input
              type="checkbox"
              name="Interest"
              id="Singing"
              value="Singing"
              onChange={interestHandler}
            />{" "}
            Singing
          </label>
          <br />
          <label htmlFor="Painting">
            <input
              type="checkbox"
              name="Interest"
              id="Painting"
              value="Painting"
              onChange={interestHandler}
            />{" "}
            Painting
          </label>
        </div>

        <br />
        <br />

        <div>
          <label htmlFor="colors">Favourite Colors:</label>
          <select onChange={(event)=>setColor(event.target.value)} name="colors" id="colors">
            <option value="blue">blue</option>
            <option value="red">red</option>
            <option value="orange">orange</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>

      <section>
        {
          formdata && (
            <div>
            <h1>Submitted Details: </h1>
              <h2>Name: {name}</h2>
              <p>Address: {address}</p>
              <p>Gender: {gender}</p>
              <p>interests: {interests.join(", ")}</p>
              <p>Favourite Color: {color}</p>
            </div>
          )
        }
      </section>
    </>
  );
}

export default App;

import { useState } from "react";

const ChooseEducation = () => {
  const [education, setEducation] = useState("");

  const onChangeHandler = (event) => {
    setEducation(event.target.value);
  };
  return (
    <>
      <form onChange={onChangeHandler}>
        <label>Choose your highest education level </label>
        <br />
        <input type="radio" name="education" value="High School" />
        High School <br />
        <input type="radio" name="education" value="Bachelor's Degree" />
        Bachelor's Degree <br />
        <input type="radio" name="education" value="Master's Degree" />
        Master's Degree <br />
        <input type="radio" name="education" value="Ph.D" />
        Ph.D <br />
      </form>
      {education && <p>Education Level: I have a {education}</p>}
    </>
  );
};

const ChooseMusic = () => {
  const [genre, setGenre] = useState("");
  const onChaneHandler = (event) => {
    setGenre(event.target.value);
  };
  return (
    <>
      <form onChange={onChaneHandler}>
        <label>Choose your favourite Music genre </label>
        <br />
        <input type="radio" name="musice" value="Pop" />
        Pop <br />
        <input type="radio" name="musice" value="Rock" />
        Rock <br />
        <input type="radio" name="musice" value="Hip-Hop" />
        Hip-Hop <br />
        <input type="radio" name="musice" value="Classical" />
        Classical <br />
      </form>
      {genre && <p>I Like {genre} Music</p>}
    </>
  );
};

const ChoosePaymentMetod = () => {
  const [payment , setPayment] = useState("")
  const onChaneHandler = (event) =>{
    setPayment(event.target.value)
  }
  return (
    <>
      <form onChange={onChaneHandler}>
        <label>select your preferred card payment method: </label>
        <br />
        <input type="radio" name="payment" value="Credit Card" /> Credit Card <br />
        <input type="radio" name="payment" value="Paypal" /> Paypal<br />
        <input type="radio" name="payment" value="Bitcoin" /> Bitcoin
        <br /> <input type="radio" name="payment" value="Cash" /> Cash
        <br />{" "}
      </form>
      {}
      {payment && <p>select payment method: {payment}</p>}
    </>
  );
};
const ChooseWeather = () => {
  const [weather , setWeather] = useState("")
  const onChaneHandler = (event)=>{
setWeather(event.target.value)
  }
  return (
    <>
      <form onChange={onChaneHandler}>
        <label>Choose your preferred Weather ?  </label>
        <br />
        <input type="radio" name="weather"  value="Sunny " /> Sunny <br />
        <input type="radio" name="weather"  value="Rainy"/> Rainy <br /> 
        <input type="radio" name="weather"  value="Cloudy" /> Cloudy <br />
        <input type="radio" name="weather"  value="Snowy" /> Snowy<br />
      </form>
      {weather && <p>Select Weather: I like {weather} weather</p>}
    </>
  );
};
const ChooseOcuupation = () => {
  const [occupation , setOccuaption] = useState("")
  const onChaneHandler = (event) =>{
    setOccuaption(event.target.value)
  }
  return (
    <>
      <form onChange={onChaneHandler}>
        <label>Choose your Occupation ? </label>
        <br />
        <input type="radio" name="occupation"  value="Student" /> Student   <br />
        <input type="radio" name="occupation"  value="Teacher" />Teacher <br />
        <input type="radio" name="occupation"  value="Engineer" />Engineer <br />
        <input type="radio" name="occupation"  value="Doctor" /> Doctor <br />
      </form>
      {occupation && <p>selected occupation: {occupation}</p>}
    </>
  );
};

function App() {
  return (
    <>
      <ChooseEducation />
      <br />
      <ChooseMusic />
      <br />
      <ChoosePaymentMetod/>
      <br />
      <ChooseWeather/>
      <br />
      <ChooseOcuupation/>
    </>
  );
}

export default App;

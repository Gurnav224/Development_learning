import { useState } from "react"

const ValidatePhoneNumber = () =>{
  const [phoneNumber, setPhoneNumber] = useState();

  const checkPhoneNumber = () =>{
    if(phoneNumber.length < 10){
      alert('invalid phone number. please enter 10 digits')
    }
    else{
      alert('valid phone number')
    }
  }

  return(
    <>
      <label htmlFor="phoneNumber">Enter your phone Number ? </label>
      <input type="number"  onChange={(e)=>setPhoneNumber(e.target.value)}/>
      <button onClick={checkPhoneNumber}>Validate Phone Number</button>
    </>
  )
}

const PasswordStrength = () =>{
  const [password, setPassword] = useState()

  function isPassword(password){
    const specialCharactersRegex =  /[!@#$%^&*(),.?":{}|<>]/;

    const alhpabeticalCharacerRegex = /[a-zA-Z]/;

    const hasSpecialCharacter = specialCharactersRegex.test(password);

    const hasAlhpabeticalCharacter = alhpabeticalCharacerRegex.test(password);

    const isValidLength = password.length >= 8;

    return hasAlhpabeticalCharacter && hasSpecialCharacter && isValidLength
  }


  const checkStrength = ()=>{
    if(isPassword(password)){
      alert('Password Strength : Strong')
    }
    else{
      alert('Password Strength: Weak ')
    }
  }

  return(
    <>
      <label htmlFor="passwordInput">Enter your password ? </label>
      <input type="password"  onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={checkStrength}>Check Password Strength</button>
    </>
  )
}


const AgeCalculator = () =>{
  const [age , setAge] = useState();

  const calculateAge = ()=>{
    const currentDate = new Date().getFullYear();
    const birthYear = age.split('-')[0]

    const years = currentDate - birthYear

      alert(`You are ${years} years old`)

  }

  return(
    <>
      <label htmlFor="dateInput">Enter your  Date ? </label>
      <input type="date" name="dateInput" id="dateInput"  onChange={(e)=>setAge(e.target.value)}/>
      <button onClick={calculateAge}>Calculate Age</button>

      
    </>
  )
}

const FavouriteColor = () =>{
  const [color, setColor] = useState();
  const [showColor, setShowColor] = useState(false)

  const handleChange = (e)=>{
    setShowColor(false)
    setColor(e.target.value)
  }
  

  return(
    <>
      <label htmlFor="colorInput">Enter your Favourite Color</label>
      <input type="text"  onChange={handleChange}/>
      <button onClick={()=>setShowColor(true)}>Display Color</button>
      {showColor && <p>your Favourite color is {color}</p>}
    </>
  )
}


const SearchBar = ()=>{
  const [query , setQuery] = useState('');
  const [searchResult, setSearchResult] = useState(false)

  const handleChange = (e)=>{
    setSearchResult(false)
    setQuery(e.target.value)
  }

  return(
    <>
      <label htmlFor="queryInput">Enter your search query ? </label>
      <input type="text" onChange={handleChange}/>
      <button onClick={()=>setSearchResult(true)}>Search</button>
      {searchResult && <p>Search for : {query}</p>}
    </>
  )
}


function App() {

  return (
    <>  

    <ValidatePhoneNumber/>

    <br />
    <br />

    <PasswordStrength />
    <br />
    <br />
    <AgeCalculator/>
<br />
    <br />
    <FavouriteColor/>
    <br />
    <br />
    <SearchBar/>
 
    </>
  )
}

export default App

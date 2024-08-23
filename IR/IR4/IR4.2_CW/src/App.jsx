import { useState } from "react"


const GreetUser = ()=>{
  const [username , setUsername] = useState();

  const inputHandle = (event)=>{
    setUsername(event.target.value)
  }

  return(
    <>
      <label htmlFor="username">Enter your username ? </label>
      <input type="text"  onChange={inputHandle}/>
      {username && <p>Hello, {username}</p>}
    </>
  )
}

const ValidateEmail = () =>{
  const [email, setEmail]  = useState('');

  const handleChange = (event)=>{
    setEmail(event.target.value)
  }

  const clickHandler = () =>{
    const atIndex = email.indexOf('@');
    const dotIndex = email.indexOf('.');

    if(atIndex > 0 && dotIndex > atIndex){
      alert('email is valid')
    }
    else{
      alert('email is not valid')
    }
  }

  return(
    <>
      <label htmlFor="email">Enter your email ?</label>
      <input type="email" onChange={handleChange}/>
      <button onClick={clickHandler}>Validate Email</button>
    </>
  )
}


const SquareNumber = () =>{
  const [number, setNumber] = useState();
  const [squared, setSquared] = useState()
  
  const handleNumber = (event) =>{
    setNumber(event.target.value)
  } 

  const calculateSquare = () =>{
    let squareNumber = number * number
    setSquared(squareNumber)
  }

  return(
    <>
      <label htmlFor="number">Enter a number</label>
      <input type="number" onChange={handleNumber}/>
      <button onClick={calculateSquare}>Calculate Square</button>
      {squared  && <p>{squared}</p>}
    </>
  )
}

function App() {

  return (
    <>  
    <GreetUser/>
    <br />
    <br />
    <ValidateEmail/>
    <br />
    <br />
    <SquareNumber/>
    </>
  )
}

export default App

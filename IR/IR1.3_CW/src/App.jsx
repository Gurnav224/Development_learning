/* eslint-disable react/prop-types */


const Greeting  = (props)=>{
  return <h1>Hello, {props.name}</h1>
}

const UserDetails = (props) =>{
  return(
    <>
    <h1>User Details</h1>
    <p>Name: {props.name}</p> 
    <p>Age: {props.age}</p>
    <p>Country: {props.country}</p>
    </>
  )
}

const WeatherInfo = (props)=>{
  return(
    <>
      <h1>Weather Info</h1>
      <p>Temperature: {props.temperature}</p>
      <p>Condition: {props.condtion}</p>
    </>
  )
}

const UserAvatar = (props)=>{
  return (
    <>
    <h1>User Avatar</h1>
      <img src={props.img} alt={props.alt} />
    </>
  )
}

const App = () => {
  return (
    <>
    <Greeting name="John"/>
    <UserDetails name="Bob" age={20} country="India"/>
    <WeatherInfo temperature={29} condtion = "Sunny" />
    <UserAvatar img="http://via.placeholder.com/150" alt="placehold"/>
    </>
  )
}

export default App

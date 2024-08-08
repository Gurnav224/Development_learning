/* eslint-disable react/prop-types */

const Addition = ()=>{
  const a= 2;
  const b = 5;
  return(
    <>
      <p>The result of {a} + {b} is {a+b}</p>
    </>
  )
}


const TemperatureCalculator = ()=>{
  const celsius = 30;
  return(
    <>
    <p>{celsius} degree celsius is equal to {(celsius*9)/5+32}</p>
    </>
  )
}


const CombinedOperations = ()=>{
  const a= 15;
  const b = 7;
  const c = 3;

  return(
    <>
      <p>{a} + {b} + {c} equals {a+b+c}</p>
      <p>{a} - {b} equals {a-b}</p>
      <p>{a} * {b} equals {a*b}</p>
    </>
  )
}


const Welcome = ()=>{
  const firstName = "John";
  const lastName = "Doe";
  return(
    <>
      <p>{`Welcome ${firstName} ${lastName}`}</p>
    </>
  )
}


const App = () => {
  
 
 
  return (
    <>
    <Addition/>
    <TemperatureCalculator/>
    <CombinedOperations/>
    <Welcome/>
    </>
  )
}

export default App

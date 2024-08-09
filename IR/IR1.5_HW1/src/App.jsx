/* eslint-disable react/prop-types */


const ArrayOperations = ()=>{
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce((sum,num)=>sum+num,0);
  const Average = sum/numbers.length;
  const max = numbers.reduce((max,num)=>max>num?max:num);
  const min = numbers.reduce((min,num)=>min<num ? min : num)
  return(
    <>
    <h1>Array Operations</h1>
    <p>Sum: {sum}</p>
    <p>Average: {Average}</p>
    <p>Maximum: {max}</p>
    <p>Minimum: {min}</p>
    </>
  )
}


const ObjectManipulation = ()=>{
  const person = {

    name: "Sarah",

    age: 28,

    city: "New York",

  };

  const updatePerson = {...person,age:29}

  return(
    <>
      <h1>Person Details</h1>
      <p>Name: {updatePerson.name}</p>
      <p>Age: {updatePerson.age}</p>
      <p>City: {updatePerson.city}</p>
          </>
  )
}

const SquareArea = ()=>{
    const sides = 5;

  const area = sides * sides
  return(
    <>
    <h1>Square Area</h1>
  <p>The area of square is: {area}</p>
    </>
  )
}

const CapitalizeString = ()=>{
  const string = "hello world"
  return(
    <>
    <h1>Capitalzie Text</h1>
    <p>{string.toUpperCase()}</p>
    </>
  )
}

const AreaOfCircle = ()=>{
  const radius = 8;
  const area = Math.PI * radius * radius;


  return(
    <>
  <h1>Area of circle:</h1>
  <p>The area of circle is: {area.toFixed(2)}</p>
    </>
  )
}

const App = () => {
  
 
 
  return (
    <>
    <ArrayOperations/>
    <ObjectManipulation/>
    <SquareArea/>
    <CapitalizeString/>
    <AreaOfCircle/>
    </>
  )
}

export default App


const MathOperations = ()=>{

  const a = 20;
  const b= 8;

  const getSum = (x,y)=>{
    return x + y
  }

  const getDifference = (x,y)=>{
    return x -  y
  }

  return(
    <>
    <p>{a} + {b} equals {getSum(a,b)}</p>
    <p>{a} - {b} equals {getDifference(a,b)}</p>
    </>
  )
}


const CallGreetingFunction = ()=>{
  const getGreeting = ()=>{
    return "Hello World"
  }
  return <h1>{getGreeting()}</h1>
}


const GetFormattedDate = ()=>{
  const getCurrentDate = ()=>{
    return new Date().toLocaleDateString()
  }
  return <p>Current Date: {getCurrentDate()}</p>
}

const App = () => {
  
 
 
  return (
    <>
  <CallGreetingFunction/>
  <MathOperations/>
  <GetFormattedDate/>
    </>
  )
}

export default App

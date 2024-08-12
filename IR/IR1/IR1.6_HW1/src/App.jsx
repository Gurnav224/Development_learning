
const GenerateGreeting = ()=>{
  const greet= (user)=>{
    return `Hello , ${user} !`
  }
  return <h1>{greet('John')}</h1>
}


const CalculateArea = ()=>{
  const length = 10;
  const width = 5;

  const areaOfRectangle = (length,width)=>{
    return length * width
  }

  return  <p>Area Of Rectangle : {areaOfRectangle(length,width)}</p>
}


const CalulatePerimeter = ()=>{
  const length = 10;
  const width = 5;

  const perimeter = (length,width)=>{
    return 2 * (length+width)
  }

  return <p>Perimeter: {perimeter(length,width)}</p>
}


const GenerateMessage = () =>{

  const hours = new Date().getHours();


  const getHours = (hours)=>{
    if(hours<12){
      return "Good Morning!";
    }
    else if(hours<18){
      return "Good Afternoon!";
    }
    else{
      return  "Good Evening!";
    }

  }

  return <h1>{getHours(hours)}</h1>
}


const CalculateVolume = ()=>{
  const radius = 3;
  const height = 5;
  const volume = (radius,height)=>{
    return Math.PI * radius* radius * height
  }
  return <p>Volume of Cylinder: {volume(radius,height)}</p>
}


const App = () => {
  
 
 
  return (
    <>
    <GenerateGreeting/>
    <CalculateArea/>
    <CalulatePerimeter/>
    <GenerateMessage/>
    <CalculateVolume/>
    </>
  )
}

export default App;


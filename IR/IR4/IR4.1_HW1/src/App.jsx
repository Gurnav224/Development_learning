import { useState } from "react"


const Counter = ()=>{
  const [counter , setCounter] = useState(0);

  return(
    <>
      <p>{counter}</p>
      <button onClick={()=>setCounter(counter+1)}>Increment</button>
      <button onClick={()=>setCounter(counter-1)}>Decrement</button>
    </>
  )
}

const BgColor = ()=>{
  const [colorStatus, setColorStatus] = useState(false);

  return(
    <>
      <button 
      style={{backgroundColor:colorStatus?"lightblue":"gray",padding:'12px',fontSize:18}}
      onClick={()=>setColorStatus(!colorStatus)}
      >Change Background Color</button>
    </>
  )
}

const ShowHideMessage = ()=>{
  const [isVisible, setIsVisible] = useState(true);

  return(
    <>
      <button onClick={()=>setIsVisible(!isVisible)}>{isVisible ? "Hide Message" : "ShowMesssage"}</button>
      <p>{isVisible ? "this is a toggleable message" : ""}</p>
    </>
  )
}

const ToggleColor = () =>{
  const [color, setColor] = useState('red');

  return(
    <>
    <p style={{color:color}}>text color toggler</p>
      <button onClick={()=>setColor('green')}>Toggle Color</button>
    </>
  )
}

const SelectFruit = ()=>{
  const [selectedFruit, setSelectedFruit] = useState('')

  const fruitArr = [ 'Apple' , 'Banana' , 'Orange' , 'Mango' , 'Grapes']

  return(
    <>
    <ul>
      {
        fruitArr.map((fruit , index)=>(
          <li onClick={()=>setSelectedFruit(fruit)} key={index}>
            {fruit}
          </li>
        ))
      }

    {selectedFruit && <p>your Selected: {selectedFruit}</p>}
    </ul>
    </>
  )
}


function App() {

  return (
    <>  
   <Counter/>
   <hr />
<BgColor/>
<hr />
<ShowHideMessage/>
<hr />
<ToggleColor/>
<hr />
<SelectFruit/>
    
    </>
  )
}

export default App


const RandomNumber = ()=>{
  const randomNumber = Math.floor(Math.random()*100)
  return(
    <>
    <p>Random Number: {randomNumber}</p>
    </>
  )
}

const AbsoluteValue = ()=>{
  const value = -10;

  return(
    <>
      <p>Absolute Value: {Math.abs(value)}</p>
    </>
  )
}

const SumOfEvenNumbers = ()=>{
  const numbers = [1, 2, 3, 4, 5, 6, 7];
  const sumOfEven = numbers.reduce((sum,num)=>num%2===0 ? sum+num: sum,0)
  return(
    <>
      <p>Sum Of Even Number: {sumOfEven} </p>
    </>
  )
}


const SquarePerimeter = ()=>{
  const sides = 5;
  const perimeter = 4*sides;
  return(
    <>
      <h1>Square Perimeter Calculator</h1>
      <p>Sides length: {sides} cm</p>
      <p>Perimeter: {perimeter} cm</p>
    </>
  )
}

const CurrencyConveter = ()=>{
  const usd = 50;
  const conversion = 74.5;
  const inr = conversion*usd
  return(
    <>
      <h1>Currency Coverter</h1>
      <p>Amount In USD: ${usd}</p>
      <p>Exchange Rate 1 USD = {conversion} INR</p>
      <p>Amount In INR: {inr} INR</p>
    </>
  )
}

const App = () => {
  
 
 
  return (
    <>
   <RandomNumber/>
   <AbsoluteValue/>
   <SumOfEvenNumbers/>
   <SquarePerimeter/>
   <CurrencyConveter/>
    </>
  )
}

export default App

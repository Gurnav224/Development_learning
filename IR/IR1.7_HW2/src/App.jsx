/* eslint-disable react/prop-types */

const CreditCardPayment = ({amount})=><p>{amount > 1000 ? "Please use your credit card for payment." : "You can pay using cash or debit card."}</p>

const ProductAvailability = ({inStock})=><p>{inStock ? "The product is available. Order now!" : "Sorry, the product is currently out of stock."}</p>


const TrafficLight = ({color})=> <p>{color==="red" ? "Stop! The light is red." : "Go! The light is green."}</p>


const MembershipStatus = ({isPremium})=><p>{isPremium ? "Welcome, Premium Member!" : "Upgrade to premium for exclusive benefits"}</p>


const WeatherReport = ({isSunny})=><p>{isSunny ? "It is sunny today." : "It is not sunny today."}</p>

const App = () => {
  
 
 
  return (
    <>
  <CreditCardPayment   amount={1000} />
  <ProductAvailability inStock={true} />
  <TrafficLight color={'red'} />
  <MembershipStatus isPremium={true} />
  <WeatherReport isSunny={true} />
    </>
  )
}

export default App;


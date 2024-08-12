/* eslint-disable react/prop-types */

const UserStatus = ({isOnline})=><p>{isOnline ? "User is Onine" : "User is Offline"}</p>

const DayOfWeek = ({isWeekend})=> <p>{isWeekend? "Enjoy your weekend!" : "Have a great day!"}</p>

const ShoppingCart = ({itemCount})=> <p>{itemCount > 0 ?  `You have ${itemCount} items in your cart` : "Your cart is empty"}</p>


const DiscountOffer = ({isPrimeMember})=><p>{isPrimeMember ? "You're eligible for a 20% discount" : "Become a prime member for exclusive discounts"}</p>


const ShowError = ({showError}) => showError && <p>An error occurred. Please try again later</p>

const App = () => {
  
 
 
  return (
    <>
    <UserStatus isOnline={true} />
    <DayOfWeek isWeekend={true} />
    <ShoppingCart itemCount={9} />
    <DiscountOffer isPrimeMember={true} />
    <ShowError showError={true} />
    </>
  )
}

export default App;


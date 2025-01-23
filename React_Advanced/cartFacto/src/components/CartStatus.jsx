import  { useProduct } from "../custom_hooks/ProductContext"

const CartStatus = () => {
    const {  cart } = useProduct();
  return (
    <span className="font-bold  text-black">
     {cart ? cart.length  : 0}  
    </span>
  )
}

export default CartStatus

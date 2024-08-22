import Footer from "../components/Footer"
import Header from "../components/Header"

const cart = [
    { id: 1, name: "Product 1", price: 99.99, quantity: 2 },
    { id: 2, name: "Product 2", price: 129.99, quantity: 1 },
    { id: 3, name: "Product 3", price: 79.99, quantity: 3 },
  ];

const Cart = () => {
    const CartTotal = cart.reduce((total,product)=>total + product.quantity * product.price,0)
  return (
    <>
    <Header/>
    <main className="container py-4">
        <h1 className="display-4">Shopping Cart</h1>
        <ul className="list-group ">
            {
              cart.map((product)=>(
                <li className="list-group-item d-flex justify-content-between align-items-center" key={product.id}>
                <div>
                <h4>{product.name}</h4>
                    <p>Price: {product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                </div>
                   

                    <p className="mb-0">Total: ${(product.price * product.quantity).toFixed(2)}</p>
                </li>
              ))
            }
        </ul>
        <h4 className="py-3">Cart Total: ${CartTotal} </h4>
    </main>

    <Footer/>
      
    </>
  )
}

export default Cart

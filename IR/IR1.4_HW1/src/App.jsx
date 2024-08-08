/* eslint-disable react/prop-types */

const Header = () => {
  return(
    <header>
      <h1>Welcome to Our Company</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

const SmartphoneDetails = ({product})=>{
  return(
    <>
    <h2>{product.name}</h2>
    <p>Category: {product.category}</p>
    <p>Price: {product.price}</p>
    <p>Stock: {product.stock}</p>
    </>
  )
}


const Footer = ()=>{
  return(
    <p>&copy; 2024 Our Company , All rights reserved</p>
  )
}


const App = () => {
  
  const product = {
    name:'Smartphone',
    category:'Electronics',
    price:'$799.99',
    stock:100
  }
 
  return (
    <>
    <Header/>
    <SmartphoneDetails product={product}/>
    <Footer/>
    </>
  )
}

export default App

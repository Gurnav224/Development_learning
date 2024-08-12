/* eslint-disable react/prop-types */


const ProductPage = ({product})=>{
  const {name, src, price,inStock , description} = product;

  return(
    <>
      <h1>Product Page</h1>
      <h2>{name}</h2>
      <img src={src} alt={src} />
      <p><strong>Price: </strong>${price}</p>
      <p><strong>Description: </strong>{description}</p>
      <p><strong>InStock: </strong>{inStock ? "InStock" : "Currently out of stock"}</p>
    </>
  )
}

const Footer = ()=>{
  return(
    <>
      <p>&copy; 2024 Apple Inc.</p>
    </>
  )
}

const App = () => {
  
  const product = {
    name:'Iphone 15 Pro',
    src:'https://placehold.co/150x150/png',
    price:'499.99',
    description:'the latest flagship smartphone from apple with cutting-edge features and stunning design.',
    inStock:true,
  }
 
 
  return (
    <>
    <ProductPage
    product={product}
    />
    <Footer/>
    </>
  )
}

export default App;


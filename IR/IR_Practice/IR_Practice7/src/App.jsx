/* eslint-disable react/prop-types */
import { useState } from "react";


const Article = ({title,content}) =>{
  const [showMore , setShowMore] = useState(false)
  return(
    <div>
      <h1>{title}</h1>
      {showMore && <p>{content}</p>}
      <button onClick={()=>setShowMore(!showMore)}>{showMore ? "Hide Detail" : "Know More"}</button>
    </div>
  )
}

const About = ({heading,name, learning}) =>{
  const [showMore , setShowMore] = useState(false)
  return(
    <div>
      <h1>{heading}</h1>
      <h2>{name}</h2>
      <button onClick={()=>setShowMore(true)}>show more</button>
      {showMore && <p>{learning}</p>}
    </div>
  )
}


const UserInfo = ({username , email ,age}) =>{
   const [fullDetails , setFullDetails] = useState(false)
  return(
    <>
    <h1>User Information</h1>
     <h2>Username: {username}</h2>
   
     {
      !fullDetails &&    <button onClick={()=>setFullDetails(true)}>See Profile</button>
     }
     {
      fullDetails && (
        <>
        <p><strong>Email: </strong>{email}</p>
        <p><strong>Age</strong>: {age}</p>
        </>
      )
     }
    </>
  )
}


const UserProfile = ({username , imageUrl , bio , location}) =>{
  const [showProfile, setShowProfile] = useState(false)
  return(
    <div>
      <h1>User Profile</h1>
      <p><strong>Username: </strong>{username}</p>
      {
        !showProfile && <button onClick={()=>setShowProfile(true)}>View Profile</button>
      }
      {
        showProfile && (
          <>
          <img src={imageUrl} alt="image" />
      <p><strong>Bio:</strong> {bio}</p>
      <p><strong>Location: </strong>{location}</p>
          </>
        )
      }
     
    </div>
  )
}

const ProductDetails = ({productName, description, price, }) =>{
  const [showDetails ,setShowDetails] = useState(false)
  return(
    <div>
    <h1>Product Details</h1>
    <p><strong>ProductName: </strong>{productName}</p>
    {
      !showDetails && <button onClick={()=>setShowDetails(true)}>Show Details</button>
    }
    {
      showDetails && (
        <>
          <p><strong>Description: </strong>{description}</p>
          <p><strong>Price: </strong>{price}</p>
        </>
      )
    }
    </div>
  )
}

const App = () => {
  const title = 'React is awesome'
const content = 'React is a JavaScript library for building user interfaces.'

const heading = 'About Me'
const name = 'Preeti' // you can put your name
const learning = 'I am learning React JS currently at neoG Camp.'

const user = {
  username:'Akansha',
  email:"akansha@testmail.com",
  age:35
}

const userprofile = {
  username:'Jane Doe',
  imageUrl:'https://placehold.co/300x200',
  bio:'Frontend Developer',
  location:'New York'
}

const product = {
  productName:'Smartphone',
  description:'High-performance , smarthphone with advanced features',
  price:'599.99'
}

  return (
    <div>
    <Article title={title} content={content}/>
    <About heading={heading} name={name} learning={learning} />
    <UserInfo  username={user.username} email={user.email} age={user.age}/>
    <UserProfile username={userprofile.username} imageUrl={userprofile.imageUrl}  bio={userprofile.bio} location={userprofile.location}/>
    <ProductDetails productName={product.productName} description={product.description} price={product.price} />
    </div>
  );
};

export default App;

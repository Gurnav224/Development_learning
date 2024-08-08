/* eslint-disable react/prop-types */

const Header = () => {
  return(
    <header>
      <h1>Welcome to Our Blog</h1>
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

const BlogDetails = ({blog}) =>{
  return(
    <>
    <h2>{blog.title}</h2>
  <p>Author: {blog.author}</p>
  <p>date: {blog.date}</p>
  <p>description: {blog.description}</p>
    </>
  )
}



const Footer = ()=>{
  return(
    <p>&copy; 2024 Our Blog , All rights reserved</p>
  )
}


const App = () => {
  
  const blog = {
    title:'The importance of learning react',
    author:'Jane Doe',
    date:'March 1, 2024',
    description:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, est?'
  }
 
  return (
    <>
    <Header/>
   <BlogDetails blog={blog}/>
    <Footer/>
    </>
  )
}

export default App

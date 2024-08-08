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
        </ul>
      </nav>
    </header>
  )
}

const EmployeeDetails = ({employees})=>{
  return(
    <>
      <h1>Employees Details</h1>
      <p>Name: {employees.name}</p>
      <p>Position: {employees.position}</p>
      <p>Department: {employees.department}</p>
      <p>Email: {employees.email}</p>
    </>
  )
}

const Footer = ()=>{
  return(
    <p>&copy; 2024 Company Name, All rights reserved</p>
  )
}


const App = () => {
  
  const employees = {
    name:"John Doe",
    position:"Software Developer",
    department:"Engineering",
    email:"john@gmail.com"
  }


  return (
    <>
    <Header/>
    <EmployeeDetails employees={employees} />
    <Footer/>
    </>
  )
}

export default App

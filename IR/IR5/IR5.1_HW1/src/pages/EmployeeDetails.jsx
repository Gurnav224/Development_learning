import { useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { employees } from "./Employees"

const EmployeeDetails = () => {

    const {id} = useParams();

    const employee = employees.find((movie) => movie.id == id)

  return (
    <>
      <Header/>
      <main className="container my-4">
      <h1 className=" my-2">Movie  Details </h1>
     
      <ul className="list-group">
        <li className="list-group-item">
        <p><strong>Name: </strong>{employee.name}</p>
         
        </li>
        <li className="list-group-item">
        <p><strong>Title: </strong>{employee.title}</p>
        </li>
        <li className="list-group-item">
        <p><strong>Department: </strong>{employee.department}</p>

        </li>
      </ul>
      </main>
      <Footer/>
    </>
  )
}

export default EmployeeDetails;

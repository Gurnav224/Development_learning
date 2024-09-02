import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export const employees = [
  {
    id: "1",
    name: "John Doe",
    title: "Software Developer",
    department: "IT",
    hoursWorked: 210,
    performanceRate: 0.79,
    overTimeHours: 60,
  },
  {
    id: "2",
    name: "Jane Smith",
    title: "Designer",
    department: "Design",
    hoursWorked: 195,
    performanceRate: 0.95,
    overTimeHours: 45,
  },
  {
    id: "3",
    name: "Bob Johnson",
    title: "Project Manager",
    department: "Management",
    hoursWorked: 170,
    performanceRate: 0.85,
    overTimeHours: 20,
  },
];

const Employees = () => {
  const [department , setDepartment] = useState('All');

  const filterEmployees = department === 'All' ? employees : employees.filter((employee) => employee.department === department)

  return (
    <>
      <Header />
      <main className="container my-4">
        <h1 className=" my-2">List of Movies </h1>
        <div className="form-group">
          <label className="form-label" htmlFor="genre">
            Filter By Genre:{" "}
          </label>
          <select name="genre" id="genre" className="form-select mb-4" onChange={(event) => setDepartment(event.target.value)}>
            <option value="All" selected>
              All
            </option>
            <option value="Design">Design</option>
            <option value="Management">Management</option>
            <option value="IT">IT</option>
          </select>
        </div>
        <ul className="list-group">
          {filterEmployees.map((employee) => (
            <li key={employee.id} className="list-group-item py-3">
              <h4>{employee.name}</h4>
              <p> {employee.title}</p>
              <Link
                to={`/employees/${employee.id}`}
                className="btn btn-primary"
              >
                View Details
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Employees;

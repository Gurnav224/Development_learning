import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Employees = () => {
  const employees = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Developer",
      department: "IT",
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "Designer",
      department: "Design",
    },
    {
      id: 3,
      name: "Bob Johnson",
      designation: "Project Manager",
      department: "Mangement",
    },
  ];

  return (
    <>
      <Header />
      <main className="container">
        <h1 className="py-3">List Of Employees</h1>
        <ul className="list-group my-4">
          {employees.map((employee) => (
            <li key={employee.id} className="list-group-item">
              <h3>{employee.name}</h3>
              <p>{employee.designation}</p>
              <Link
                className="btn btn-primary"
                to={`/employeedetails/${employee.id}`}
              >
                View Details
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer/>
    </>
  );
};

export default Employees;

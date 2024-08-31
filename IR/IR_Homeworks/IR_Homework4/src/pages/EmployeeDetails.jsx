import { useParams } from "react-router-dom";
import Header from "../components/Header";

const EmployeeDetails = () => {
  const { id } = useParams();

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

  const employee = employees.find((employee) => employee.id == id);

  delete employee.id;
  const employeeKey = Object.keys(employee);

  return (
    <>
      <Header />
      <main className="container py-4">
        <h1> {employee.name}</h1>
        <ul className="list-group my-3">
          {employeeKey.map((key) => (
            <li className="list-group-item" key={key}>
              <strong>{key}</strong> : {employee[key]}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default EmployeeDetails;

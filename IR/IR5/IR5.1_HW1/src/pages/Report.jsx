import Footer from "../components/Footer"
import Header from "../components/Header"
import { employees } from "./Employees"

const Report = () => {
   
  const mostWorkedEmployee = employees.reduce((mostWorked , currentEmployee) => mostWorked.hoursWorked > currentEmployee.hoursWorked ? mostWorked : currentEmployee);

  const mostRatedEmployee = employees.reduce((highRated , currentEmployee) => highRated.performanceRate > currentEmployee.performanceRate ? highRated : currentEmployee)

  const totalOverTime = employees.reduce((total, currentEmployee) => total + currentEmployee.overTimeHours ,0)

  return (
    <>
     <Header/>
     <main className="container">
     <h1 className="my-2">Movie Report</h1>
     <hr />
<div className="row">


     <div className="col-md-4 mb-3">
      <h3>Most Worked Employee</h3>
      <p><strong>Name: </strong>{mostWorkedEmployee.name}</p>
      <p><strong>Hours Worked: </strong>{mostWorkedEmployee.hoursWorked}</p>
     </div>
     <div className="col-md-4 mb-3">
      <h3>Highest Rated Employee</h3>
      <p><strong>Name: </strong>{mostRatedEmployee.name}</p>
      <p><strong>Performance: </strong>{mostRatedEmployee.performanceRate}</p>
     </div>

     <div className="col-md-4 mb-3">
      <h3>Total Overtime Hour</h3>
      <p>Total Overtime Hours: {totalOverTime} </p>
     </div>
</div>
    
     </main>
     <Footer/> 
    </>
  )
}

export default Report

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import Employees from './pages/Employee.jsx';
import EmployeeDetails from './pages/EmployeeDetails.jsx';
import Report from './pages/Report.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/employee',
    element:<Employees/>
  },
  {
    path:'/employeedetails/:id',
    element:<EmployeeDetails/>
  },
  {
    path:'/report',
    element:<Report/>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

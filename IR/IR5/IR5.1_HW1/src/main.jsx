import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js"
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Report from './pages/Report.jsx';
import Employees from './pages/Employees.jsx';
import EmployeeDetails from './pages/EmployeeDetails.jsx';



const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/employees',
    element:<Employees/>
  },
  {
    path:'/employees/:id',
    element:<EmployeeDetails/>
  },
  {
    path:'/report',
    element:<Report/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

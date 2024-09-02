import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js"
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Report from './pages/Report.jsx';
import Foods from './pages/Foods.jsx';
import FoodDetails from './pages/FoodDetails.jsx';



const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/foods',
    element:<Foods/>
  },
  {
    path:'/foods/:id',
    element:<FoodDetails/>
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



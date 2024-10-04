import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import "./index.css"
import { createBrowserRouter , RouterProvider} from "react-router-dom";
import ProductList from './pages/ProductList.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/products',
    element:<ProductList/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

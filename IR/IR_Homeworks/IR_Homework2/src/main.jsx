import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import Records from './pages/Records.jsx';
import Biography from './pages/Biography.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/records',
    element:<Records/>
  },
  {
    path:'/biograhpy',
    element:<Biography/>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

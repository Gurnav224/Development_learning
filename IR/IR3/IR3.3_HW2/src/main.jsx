import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import About from './pages/About.jsx'
import Stays from './pages/Stays.jsx'
import StaysDetails from './pages/StaysDetails.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
 {
  path:'/stays',
  element:<Stays/>
 },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/stays/:id',
    element:<StaysDetails/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)

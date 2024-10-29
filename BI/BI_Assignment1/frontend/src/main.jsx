import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {register} from "swiper/element/bundle"

register()

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import './index.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import EventDetails from './pages/EventDetails.jsx'
import Events from './pages/Events.jsx'
import NotFound from './pages/NotFound.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/events',
    element:<Events/>,
    
  },
  {
    path:'/events/:id',
    element:<EventDetails/>
  },
  {
    path:"*",
    element:<NotFound/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

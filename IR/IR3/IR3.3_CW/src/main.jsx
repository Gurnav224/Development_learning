import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from "react-router-dom"
import About from './pages/About.jsx'
import Blogs from './pages/Blogs.jsx'
import BlogDetails from './pages/BlogDetails.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/blogs',
    element:<Blogs/>
  },
  {
    path:'/blogs/:blogId',
    element:<BlogDetails/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)

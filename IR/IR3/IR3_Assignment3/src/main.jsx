import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from "react-router-dom"
import UserProfile from './pages/UserProfile.jsx'
import ProfileDetails from './pages/ProfileDetails.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/profile',
    element:<UserProfile/>
  },
  {
    path:'/users/:username',
    element:<ProfileDetails/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js"
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Report from './pages/Report.jsx';
import Players from './pages/Players.jsx';
import PlayerDetails from './pages/PlayerDetails.jsx';



const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/players',
    element:<Players/>
  },
  {
    path:'/players/:id',
    element:<PlayerDetails/>
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



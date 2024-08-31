import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider} from "react-router-dom";
import Report from './pages/Report.jsx';
import PlayerDetails from './pages/PlayerDetails.jsx';
import Player from './pages/Players.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/players',
    element:<Player/>
  },
  {
    path:'/playerdetails/:id',
    element:<PlayerDetails/>
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

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js"
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Movies from './pages/Movies.jsx';
import MoviesDetails from './pages/MoviesDetails.jsx';
import Report from './pages/Report.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/movies',
    element:<Movies/>
  },
  {
    path:'/movies/:id',
    element:<MoviesDetails/>
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

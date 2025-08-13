import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import UsersList from './userList.tsx'
import Counter from './useReducer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/*<App />*/}
    {/*<UsersList/>*/}
    <Counter/>
  </StrictMode>,
)

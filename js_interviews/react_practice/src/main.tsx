import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Timer from './Timer.tsx'
import Cat from './Cat.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Timer/> */}
    <Cat/>
  </StrictMode>,
)

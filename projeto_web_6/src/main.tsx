import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import Home from './pages/Home.tsx'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home/>
  </StrictMode>,
)

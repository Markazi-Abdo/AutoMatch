import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppAutoMatch from './AppAutoMatch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppAutoMatch />
  </StrictMode>,
)

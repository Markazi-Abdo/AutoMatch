import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import RoutingManagement from './RoutingManagement'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <RoutingManagement />
    </BrowserRouter>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import RoutingManagement from './RoutingManagement'
import { legacy_createStore } from 'redux'
import { Provider } from 'react-redux'
import Reduce from './Reduce/Reducer'

createRoot(document.getElementById('root')).render(
  <Provider store={legacy_createStore(Reduce)}>
    <BrowserRouter>
    <RoutingManagement />
    </BrowserRouter>
  </Provider>
)

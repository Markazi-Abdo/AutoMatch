import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import RoutingManagement from './RoutingManagement'
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import Reduce from './Reduce/Reducer';
const store = createStore(Reduce);
createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <Provider store={store}>
    <RoutingManagement />
    </Provider>
    </BrowserRouter>
)

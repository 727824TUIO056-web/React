import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './Redux/App.jsx'
import { Provider } from 'react-redux'
import { store } from './Redux/store.jsx'
import Fetch from './Api/fetch.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  
    <Fetch/>
  
  // </StrictMode>,
)
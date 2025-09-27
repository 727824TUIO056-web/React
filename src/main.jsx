import { createRoot }from 'react-dom/client'
import './index.css'
import App from './App'
import {Provider} from 'react-redux'
import {store} from './redux/store'
import Fetch from './Api/fetch'
createRoot(document.getElementById('root')).render(
  <Fetch></Fetch>
)
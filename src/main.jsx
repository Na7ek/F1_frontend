import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Header/index.jsx'
import Teams from './Teams/index.jsx'
import GrandPrix from './GrandPrix/index.jsx'
import Schedule from './Schedule/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

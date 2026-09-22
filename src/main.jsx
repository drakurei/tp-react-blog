import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Bootstrap installé avec npm (le css + le js pour le menu burger)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

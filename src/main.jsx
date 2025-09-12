import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <div className="bg-yellow-200 text-black text-center p-2">
      🚧 This project is under development. Features may change or not work properly.
    </div>
  </StrictMode>,
)

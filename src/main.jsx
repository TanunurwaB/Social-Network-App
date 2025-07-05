import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { DarkmodeContextProvider } from './context/darkModeContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkmodeContextProvider>
    <App />
    </DarkmodeContextProvider> 
  </React.StrictMode>,
)

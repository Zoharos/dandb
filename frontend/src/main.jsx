import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Lsprovider } from './LocalStorageContextHook/lscontext';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Lsprovider value={"pastQueries"}>
      <App />
    </Lsprovider>
  </React.StrictMode>,
)

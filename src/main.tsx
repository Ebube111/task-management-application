import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TaskProvider } from './components/context/TaskContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TaskProvider>
    <App />
    </TaskProvider>
  </React.StrictMode>,
)

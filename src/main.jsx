import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import store from './store/store.js'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Provider store={store}>
        <App />
      </Provider>
    </RouterProvider>
  </React.StrictMode>,
)

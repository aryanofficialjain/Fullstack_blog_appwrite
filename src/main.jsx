import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import store from './store/store.js'
import { Provider } from 'react-redux'

// import the conponenets 
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Protected from './components/Protected.jsx'

import Signup from "./pages/Signup.jsx"
import AllPosts from "./pages/AllPosts.jsx"
import AddPost from "./pages/AddPost.jsx"
import EditPost from "./pages/EditPost.jsx"
import Post from "./pages/Post.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: (<Protected authentication={false}>
          <Login />
        </Protected>)
      },
      {
        path: '/signup',
        element: (<Protected authentication={false}>
          <Signup />
        </Protected>)
      },
      {
        path: '/all-posts',
        element: (<Protected authentication>
          <AllPosts />
        </Protected>)
      },
      {
        path: '/edit-post/:slug',
        element: (<Protected authentication>
          <EditPost />
        </Protected>)
      },
      {
        path: '/post/:slug',
        element: (<Protected authentication>
          <Post />
        </Protected>)
      },



    ]
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

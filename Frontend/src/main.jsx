// import { BrowserRouter } from 'react-router-dom'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Login from './components/authentication/Login.jsx'
import Signup from './components/authentication/Signup.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);


createRoot(document.getElementById('root')).render(
<>
<RouterProvider router={router} />
<App/>
</>
  
)
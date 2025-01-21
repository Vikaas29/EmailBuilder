import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { LandingPage } from './components/LandingPage.jsx';
import { Login } from './components/Login.jsx';
import { RegisterPage } from './components/RegisterPage.jsx';
import { MainPage } from './components/MainPage.jsx';
import { Template1 } from './components/Template1.jsx';
import { Template2 } from './components/Template2.jsx';

const appRouter=createBrowserRouter([
  {
      path:"/",
  element: <App/>,
  children : [
    {
      path:"/",
      element:<LandingPage></LandingPage>,
    },
    {
      path:"/login",
      element:<Login></Login>,
    },
    {
      path:"/register",
      element:<RegisterPage></RegisterPage>,
    },
    {
      path:"/mainpage",
      element:<MainPage></MainPage>,
    },
    {
      path:"/template1",
      element:<Template1></Template1>,
    },
    {
      path:"/template2",
      element:<Template2></Template2>,
    },

  ],
  // errorElement:<Error></Error>
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}/>
)

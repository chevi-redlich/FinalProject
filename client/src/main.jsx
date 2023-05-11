import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Login } from './components/login.jsx';
import { Signin } from './components/Signin.jsx';


const router=createBrowserRouter([
  {
    path:"/",
    Component : App,
  }
   ,
     { path:'login',
      Component:Login,
    }
    ,{
        path:'signin',
        Component:Signin
    },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

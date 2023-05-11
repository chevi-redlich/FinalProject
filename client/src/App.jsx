import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Login } from './components/login'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Home } from './components/Home';


function App() {

  return (
    <>
      {/* <Login></Login> */}
      <Home></Home>
    </>
  )
}

export default App

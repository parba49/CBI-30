
import './App.css'

import { Outlet,Link,NavLink } from "react-router-dom";

import { IoMdContact } from "react-icons/io";

import Navbar from './Components/Navbar.jsx';

import Sidebar from './Components/Sidebar.jsx';

// import Home from './Components/Home.jsx';

function App() {
 

  return (
    <>

   
    
      <header className=' grid grid-cols-2 p-10 '>


      <Sidebar ></Sidebar>

      <Navbar></Navbar>

      {/* <Home></Home> */}


      
      
     
     
      </header>

      <Outlet></Outlet>

      <footer>All rigts reserved</footer>

      
    </>
  )
}

export default App

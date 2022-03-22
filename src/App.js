import React, { Component } from "react";
import { ReactDOM } from "react";
import {  BrowserRouter as Router, Routes,Route, Link, } from 'react-router-dom'  
// import Login from "./Component/Login/Login";
// import Form from './Component/Signup/Form'
// import Home from './Component/Home/Home';
 
const App =()=>{
  return(
    <div>
      <Router>
      
      <Routes>
{/*       
    <Route  path='/' element={<Form/>}/>
    <Route  path="/Login" element={<Login/>}/>
    <Route  path="/Home" element={<Home/>}/> 
    */}
    </Routes>
      </Router>
      </div>
  )
}
export default App
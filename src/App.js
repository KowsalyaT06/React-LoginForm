import React, { Component } from "react";
import { ReactDOM } from "react";
import {  BrowserRouter as Router, Routes,Route, Link, } from 'react-router-dom'  
import Login from "./Component/Login/Login";
import Form from './Component/Signup/Form'
import Home from './Component/Home/Home';
 
const App =()=>{
  return(
    <div>
      <Router>
      
      <Routes>
      
    <Route exact path='/' element={<Form/>}/>
    <Route exact path="/Login" element={<Login/>}/>
    <Route exact path="/Home" element={<Home/>}/> 
   
    </Routes>
      </Router>
      </div>
  )
}
export default App
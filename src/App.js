import React, { Component } from "react";
import { ReactDOM } from "react";
import {  BrowserRouter as Router, Routes,Route, Link, } from 'react-router-dom'  
import Login from "./Component/Login/Login";
import Form from './Component/Signup/Form'
import Home from './Component/Home/Home';
import Main from './Component/UseReducer/Main';
import Datafetch from './Component/Api/Datafetch';
const App =()=>{
  return(
    <div>
      <Router>
      
      <Routes>
      
     <Route  path='/' element={<Form/>}/>
    <Route  path="/Login" element={<Login/>}/>
    <Route  path="/Home" element={<Home/>}/> 
    <Route path='/Main' element={<Main/>}/>
    <Route path="/Api" element={<Datafetch/>}/>
    </Routes>
      </Router>
      </div>
  )
}
export default App
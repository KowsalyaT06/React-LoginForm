import React, { Component } from "react";
import { ReactDOM } from "react";
import {  BrowserRouter as Router, Routes,Route, Link, } from 'react-router-dom'  
import Login from "./Component/Login/Login";
import Form from './Component/Signup/Form'
import Home from './Component/Home/Home';
import Main from './Component/UseReducer/Main';
import Datafetch from './Component/Api/Datafetch';
import Post from "./Component/Api/Post";
import Edit from './Component/Api/Edit';
import Homes from "./Component/HOC/Homes";
import Abouts from "./Component/HOC/Abouts";
import Navbar from "./Component/Redux-Ui/Navbar/Navbar";
import Details from './Component/Redux-Ui/Products/Details';
import EditPage from './Component/Redux-Ui/Products/EditPage' ;
import Multiproduct from './Component/Redux-Ui/Products/Multiproduct';
import Multiedit from './Component/Redux-Ui/Products/Multiedit';
import Multiadd from "./Component/Redux-Ui/Products/Multiadd";
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
    <Route path='/Post' element={<Post/>}/>
    <Route path="/Edit/:id" element={<Edit/>}/>
    <Route path='/Homes' element={<Homes/>}/>
    <Route path='/Abouts' element={<Abouts/>}/>
    <Route path='/Nav' element={<Navbar/>}/>
    <Route path='/Details' element={<Details/>}/>
    <Route path='/EditPage/:id' element={<EditPage/>}/>
    <Route path='/multi' element={<Multiproduct/>}/>
    <Route path='/multiedit/:id' element={<Multiedit/>}/>
    <Route path='/multiadd' element={<Multiadd/>}/>
    </Routes>
      </Router>
      </div>
  )
}
export default App
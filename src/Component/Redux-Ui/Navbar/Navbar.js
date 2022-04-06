import React from "react";
import Homee from '../Homee';
import Products from "../Products/Products";
import { Navigate, useNavigate } from "react-router-dom";
const Navbar = () => {
    let navigate = useNavigate()
    const handlego = () =>{
        navigate('/Details')
    }
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
                <div class="container">
                    <a class="navbar-brand fw-bold fs-4 " href="#">COLLECTIONS</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Products</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                      <div className="Button">
                         <a href="" className="btn btn-outline-dark">Login</a>
                         <a href="" className="btn btn-outline-dark ms-2">Register</a>
                         <a href="" className="btn btn-outline-dark ms-2" onClick={handlego}>
                         <i className="fa fa-shopping-cart me-1"></i>Cart (0)</a>
                          </div>
                    </div>
                </div>
            </nav>
            <Homee/>
            <Products/>
        </>
    )
}
export default Navbar;
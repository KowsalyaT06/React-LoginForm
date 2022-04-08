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
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-4 " href="#">COLLECTIONS</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                      <div className="Button">
                         <a href="" className="btn btn-outline-dark">Login</a>
                         <a href="" className="btn btn-outline-dark ms-2">Register</a>
                         <a href="" className="btn btn-outline-dark ms-2" onClick={handlego}>
                       ADD PRODUCT</a>
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
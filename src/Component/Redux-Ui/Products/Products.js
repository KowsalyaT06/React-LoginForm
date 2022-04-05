import React from "react";
import { useSelector } from "react-redux";


const Products = () => {
    const Products =useSelector((state)=>state);
    console.log(Products)
    return (
        <>
            <div className='container my-5 py-5'>
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">OFFER PRODUCTS</h1>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div class="card">
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>

                    
                </div>
            </div>
        </>
    )
}
export default Products
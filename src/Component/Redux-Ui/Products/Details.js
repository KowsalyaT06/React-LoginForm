import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import './Details.css'
import { addProducts } from '../Redux/Action/Action'
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
// import { Table } from "react-bootstrap";
// import { addProducts } from '../Redux/Action/Action';
import { useDispatch, useSelector } from "react-redux";

// import { Button } from "bootstrap";

const Details = () => {
    const [data, setData] = useState({ title: "", Price: "", Url: '', Content: '' })
    // const productsadd = useSelector((state) => state.addProducts.productsadd);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    let navigate = useNavigate()
    
  
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addProducts(data));

        navigate('/Nav')
    }

   
    return (
        <>
            <h1>PRODUCT DETAILS</h1>
            <div>
                <form>
                    <div className="style">
                        <input placeholder="Add title" name="title" value={data.title} onChange={handleChange} /><br></br>

                        <input placeholder="Add price" name="Price" value={data.Price} onChange={handleChange} /><br></br>

                        <input placeholder="Add url" name="Url" value={data.Url} onChange={handleChange} /><br></br>

                        <input placeholder="Add content" name="Content" value={data.Content} onChange={handleChange} />
                    </div>
                </form>
                <div className="btnnn">
                    <Button variant="success" size="lg" onClick={handleSubmit}>ADD</Button>
                </div>
            </div>
        </>
    )
}

export default Details
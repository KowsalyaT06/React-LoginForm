import React, { useState } from "react";
import { Button } from "react-bootstrap";
import './Details.css'
import { addMultiProducts } from '../Redux/Action/MultiAction'

import { useNavigate } from "react-router-dom";
// import { Table } from "react-bootstrap";
// import { addProducts } from '../Redux/Action/Action';
import { useDispatch } from "react-redux";

// import { Button } from "bootstrap";

const Multiadd = () => {

    const [dataMulti, setDataMulti] = useState({ title: "", Price: "", Url: '', Content: '' })
    // const productsadd = useSelector((state) => state.addProducts.productsadd);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setDataMulti({ ...dataMulti, [e.target.name]: e.target.value })
    }
    let navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addMultiProducts(dataMulti));

        navigate('/multi')

    }

    return (
        <>
            <h1>MULTIPRODUCT DETAILS</h1>
            <div>
                <form>
                    <div className="style">
                        <input placeholder="Add title" name="title" value={dataMulti.title} onChange={handleChange} /><br></br>

                        <input placeholder="Add price" name="Price" value={dataMulti.Price} onChange={handleChange} /><br></br>

                        <input placeholder="Add url" name="Url" value={dataMulti.Url} onChange={handleChange} /><br></br>

                        <input placeholder="Add content" name="Content" value={dataMulti.Content} onChange={handleChange} />
                    </div>
                </form>
                <div className="btnnn">
                    <Button variant="success" size="lg" onClick={handleSubmit}>ADD</Button>
                </div>
            </div>
        </>
    )
}

export default Multiadd
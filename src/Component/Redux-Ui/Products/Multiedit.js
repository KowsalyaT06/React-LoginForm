import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { editMultiProducts } from "../Redux/Action/MultiAction";
const MultiEdit = () => {
    // const [data, setData] = useState({ title: "", Price: "", Url: '', Content: '' })
    const [send, setSend] = useState({})
    const [addMulti, setAddMulti] = useState({

        title: send.title,
        Price: send.Price,
        Url: send.Url,
        Content: send.Content
    })

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setAddMulti({ ...addMulti, [e.target.name]: e.target.value })
    }

    let { id } = useParams()
    console.log(id, 'param')
    useEffect(() => {

        axios.get(`http://localhost:3007/Multiproducts/${id}`)
            .then(response => {
                console.log(response, 'Multiedit')
                setSend(response.data)

            })
            .catch(error => {

                console.log(error)
            })
    }, [id])

    useEffect(() => {
        if (send) {
            setAddMulti(send)
        }
    }, [send])
  
    let navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editMultiProducts(addMulti, id))

        navigate('/multi')
    }
    return (
        <>
           
            <h1>MULTIEDIT PRODUCT DETAILS</h1>
            <div>
                <form>
                    <div className="style">
                        <input placeholder="Add title" name="title" value={addMulti.title} onChange={handleChange} /><br></br>

                        <input placeholder="Add price" name="Price" value={addMulti.Price} onChange={handleChange} /><br></br>

                        <input placeholder="Add url" name="Url" value={addMulti.Url} onChange={handleChange} /><br></br>

                        <input placeholder="Add content" name="Content" value={addMulti.Content} onChange={handleChange} />
                    </div>
                </form>
                <div className="btnnn">
                    <Button variant="success" size="lg" onClick={handleSubmit}>UPDATE</Button>
                </div>
            </div>
        </>
    )
}
export default MultiEdit
import React,{useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

const EditPage = (products) => {
    // const [data, setData] = useState({ title: "", Price: "", Url: '', Content: '' })
    const [send, setSend] = useState({})
    const [add, setAdd] = useState({

        title: send.title,
        Price: send.Price,
        Url: send.Url,
        Content: send.Content
    })

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setAdd({ ...add, [e.target.name]: e.target.value })
    }
useEffect(()=>{
    let check = products.findIndex((dat) => dat.id===action.payload.id)
    products.splice(check, 1, action.payload)
})
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return(
        <>
        <h1>EDIT PRODUCT DETAILS</h1>
        <div>
            <form>
                <div className="style">
                    <input placeholder="Add title" name="title" value={add.title} onChange={handleChange} /><br></br>

                    <input placeholder="Add price" name="Price" value={add.Price} onChange={handleChange} /><br></br>

                    <input placeholder="Add url" name="Url" value={add.Url} onChange={handleChange} /><br></br>

                    <input placeholder="Add content" name="Content" value={add.Content} onChange={handleChange} />
                </div>
            </form>
            <div className="btnnn">
                <Button variant="success" size="lg" onClick={handleSubmit}>UPDATE</Button>
            </div>
        </div>
    </>
    )
}
export default EditPage
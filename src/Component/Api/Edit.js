import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer, } from "react-toastify";

const Edit = () => {
    const [states, dispatch] = useReducer('')
    const [send, setSend] = useState({})
    const [fetcherror, setErrorFetch] = useState(null)
    const [add, setAdd] = useState({

        firstname: send.firstname,
        Lastname: send.Lastname,
        email: send.email
    })

    const handleChange = (e) => {
        setAdd({ ...add, [e.target.name]: e.target.value })
    }

    let { id } = useParams()
    console.log(id, 'param')

    useEffect(() => {

        axios.get(`http://localhost:3006/users/${id}`)
            .then(response => {
                console.log(response, 'hii')
                setSend(response.data)

            })
            .catch(error => {
                toast('Error While Loading')
                setErrorFetch(error.message)
                console.log(error)
            })

    }, [])

    useEffect(() => {
        if (send) {
            setAdd(send)
        }
    }, [send])

    let navigate = useNavigate()
    const handleput = () => {
        axios.put(`http://localhost:3006/users/${id}`, add)
            .then((response) => {
                navigate('/Api')
            })
            .catch((error) => {
                toast.warn('Request Failed! Error while Editing')
                setErrorFetch(error.message)
                console.log(error)
            })
    }

    return (
        <>
        <ToastContainer></ToastContainer>
            <div className="style">

                <input type="text" placeholder="Enter first Name" name="firstname" value={add.firstname} onChange={handleChange}></input><br></br>

                <input type="text" placeholder="Enter Last Name" name="Lastname" value={add.Lastname} onChange={handleChange}></input><br></br>

                <input type="text" placeholder="Enter Email" name="email" value={add.email} onChange={handleChange}></input>
            </div>
            <div className="btn">
                <Button variant="success" size="lg" onClick={handleput}>PUT</Button>
            </div>
        </>
    )
}
export default Edit
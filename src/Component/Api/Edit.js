import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";



// // const reducer = (state, action) => {
// //     switch (action.type) {
// //         case Action.Edit:
// //             let put = state.findIndex((update) => update.id === action.payload.id)
// //             state.splice(put, 1, action.payload)
// //             return state
//     }
// }
const Edit = () => {
    const [states, dispatch] = useReducer('')
    const [send, setSend] = useState({})
    const [add, setAdd] = useState({

        firstname: send.firstname,
        Lastname: send.Lastname,
        email: send.email
    })

    const handleChange = (e) => {
        setAdd({ ...add, [e.target.name]: e.target.value })
    }

   

    let {id} = useParams()
    console.log(id,'param')

    useEffect(() => {

        axios.get(`http://localhost:3006/users/${id}`)
            .then(response => {
                console.log(response,'hii')
                setSend(response.data)

            })
            .catch(error => {
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
        axios.put(`http://localhost:3006/users/${id}`,add)
            .then((response) => {
                navigate('/Api')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // const pass = (method) => {
    //    
    //             dispatch({ type: Action.Edit, payload: response })
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }

    // const method = (add) => {
    //     pass(add)

    // }

    return (
        <>
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
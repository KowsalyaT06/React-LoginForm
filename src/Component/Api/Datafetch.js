import React, { useReducer, useEffect, useState, createContext } from "react";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
// import ApiModal from "./ApiModal";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import Edit from "./Edit";
import { toast, ToastContainer, } from "react-toastify";
// import Post from "./Post";
// export const pro = createContext({});
const Action = {
    Get: 'get',
    Delete: 'delete',
    Edit: 'edit'
}

const reducer = (state, action) => {
    switch (action.type) {
        case Action.Get:
            return [...state, ...action.payload]

        case Action.Delete:
            return state.filter(remove => remove.id !== action.payload)

        default:
            return state
    }
}
const Datafetch = () => {
    const [states, dispatch] = useReducer(reducer, [])
    // const [show, setShow] = useState({})
    const [value, setValue] = useState([])
    const [fetcherror, setErrorFetch] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:3006/users')
            .then(response => {
                dispatch({ type: Action.Get, payload: response.data })
            })
            .catch(error => {
                toast('Error While Loading')
                setErrorFetch(error.message)
                // dispatch({ type: 'Fetch_Error' })
                console.log(error)
            })
    }, [])


    const handleDelete = (e, user) => {
        e.preventDefault()
        axios.delete(`http://localhost:3006/users/${user}`)
            .then(response => {
                dispatch({ type: Action.Delete, payload: user })
                // console.log('delete', data)
            })
            .catch(error => {
                //  dispatch({ type: 'Fetch_Error' })
                toast.error('Request Failed')
                setErrorFetch(error.message)
                console.log(error);
            })

    }
    const handleEdit = (e, user) => {
        e.preventDefault()
        // isOpen()
        // setShow(user)
        navigate(`/Edit/${user}`)
    }
    // const pass = (method) => {
    //     axios.put(`http://localhost:3006/users/${method.id}`, method)
    //         .then(response => {
    //             dispatch({ type: Action.Edit, payload: response })
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }
    // const [ModalOpen, setModalOpen] = useState(false)
    // const isOpen = () => {
    //     setModalOpen(true);

    // }

    // const isclose = () => {
    //     setModalOpen(false);
    // }

    // const method = (add) => {
    //     pass(add)

    // }
    let navigate = useNavigate()
    const handleMove = () => {
        navigate('/Post')
    }
    return (

        <>
        <ToastContainer></ToastContainer>
            {/* <pro.Provider value={{ show: ModalOpen }}> */}
            <div className="add">
                <Button variant="primary" size="lg" onClick={handleMove}>ADD USER</Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {states.map(user => {
                        return (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.firstname}</td>
                                <td>{user.Lastname}</td>
                                <td>{user.email}</td>
                                <td><Button variant="danger" onClick={(e) => handleDelete(e, user.id)}>DELETE</Button></td>
                                <td><Button variant="success" onClick={(e) => handleEdit(e, user.id)}>EDIT</Button></td>
                            </tr>
                        );
                    })}


                </tbody>
                {/* <Edit users={show} /> */}
            </Table>

            {/* <Post/> */}
            {/* </pro.Provider> */}
        </>
    )


}
export default Datafetch;
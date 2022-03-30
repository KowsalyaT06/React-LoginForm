import React, { useReducer, useEffect, useState, createContext } from "react";
import axios from "axios";
import { Button, Table, Form } from "react-bootstrap";
import ApiModal from "./ApiModal";

export const pro = createContext({});
const Action = {
    Get: 'get',
    Add: 'add',
    Delete: 'delete',
    Edit: 'edit'


}
const reducer = (state, action) => {
    switch (action.type) {
        case Action.Get:
            return [...state, ...action.payload]

        case Action.Add:
            return [...state, ...action.payload]

        case Action.Delete:
            return state.filter(remove => remove.id !== action.payload.id)

        case Action.Edit:
            let put = state.findIndex((update) => update.id === action.payload.id)
            state.splice(put, 1, action.payload)
            return state

        // //     }

        // // default:
        //     return state
    }
}
const Datafetch = () => {
    const [states, dispatch] = useReducer(reducer, [])
    const [data, setData] = useState({ firstname: "", Lastname: "", email: '' })
    const [show, setShow] = useState({})
    const [value, setValue] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3006/users')
            .then(response => {
                dispatch({ type: Action.Get, payload: response.data })
            })
            .catch(error => {
                // dispatch({ type: 'Fetch_Error' })
                console.log(error)
            })
    }, [])
    const handleChange = (e) => {

        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3006/users', data)
            .then(response => {
                dispatch({ type: Action.Add, payload: response.data })
                console.log('add', data)
            })
            .catch(error => {
                // dispatch({ type: 'Fetch_Error' })
                console.log(error)
            })

    }
    const handleDelete = (e, user) => {
        e.preventDefault()
        axios.delete(`http://localhost:3006/users/${user}`)
            .then(response => {
                dispatch({ type: Action.Delete, payload: response.user })
                console.log('delete', data)
            })
            .catch(error => {
                //  dispatch({ type: 'Fetch_Error' })
                console.log(error);
            })

    }
    const handleEdit = (e, user) => {
        e.preventDefault()
        isOpen()
        setShow(user)

    }
    const pass = (method) => {
        axios.put(`http://localhost:3006/users/${method.id}`, method)
            .then(response => {
                dispatch({ type: Action.Edit, payload: response })
            })
            .catch(error => {
                console.log(error)
            })
    }
    const [ModalOpen, setModalOpen] = useState(false)
    const isOpen = () => {
        setModalOpen(true);

    }

    const isclose = () => {
        setModalOpen(false);
    }

    const method = (add) => {
        pass(add)
        isclose()
    }
    return (

        <><pro.Provider value={{ show: ModalOpen }}>

            <form>
                <input placeholder="Add First_Name" name="firstname" value={data.firstname} onChange={handleChange} />

                <input placeholder="Add Last_Name" name="Lastname" value={data.Lastname} onChange={handleChange} />

                <input placeholder="Add Email" name="email" value={data.email} onChange={handleChange} />
            </form>
            <Button variant="success" size="lg" onClick={handleSubmit}>ADD</Button>
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
                                <td><Button variant="success" onClick={(e) => handleEdit(e, user)}>EDIT</Button></td>
                            </tr>
                        );
                    })}


                </tbody>
            </Table>

            <ApiModal close={isclose} users={show} sending={pass} />
        </pro.Provider>
        </>

    )

}
export default Datafetch
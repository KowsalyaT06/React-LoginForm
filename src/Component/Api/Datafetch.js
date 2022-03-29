import React, { useReducer, useEffect,useState } from "react";
import axios from "axios";
import { Button, Table, Form } from "react-bootstrap";
const Action = {
    Get: 'get',
    Add: 'add',
    Delete: 'delete',
    Edit: 'edit'


}
const reducer = (state, action) => {
    switch (action.type) {
        case 'Action.Get':
            return [...state, ...action.payload]

        case 'Action.Add':
            return [...state, ...action.payload.data]

        //case 'Action.Edit':
        // //     return {

        // //     }
        // // case 'Action.Delete':
        // //     return {}
        // // default:
        //     return state
    }
}
const Datafetch = () => {
    const [states, dispatch] = useReducer(reducer, [])
    const [data, setData] = useState({firstname: "", Lastname: "",email:''})
    useEffect(() => {
        axios.get('http://localhost:3006/users')
            .then(response => {
                dispatch({ type: 'Action.Get', payload: response.data })
            })
        // .catch(error => {
        //     dispatch({ type: 'Fetch_Error' })
        // })
    }, [])
    const handleChange = (e) => {
      
        setData({...data, [e.target.name] : e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3006/users')
            .then(response => {
                dispatch({ type: 'Action.Add', payload: response.data })
            })
            console.log('add',data)
    }

    return (
        <>


            <form>
                <input placeholder="Add First_Name" name="firstname" value={data.firstname} onChange={handleChange} />

                <input placeholder="Add Last_Name" name="lastname" value={data.firstname} onChange={handleChange} />

                <input placeholder="Add First_Name" name="firstname" value={data.firstname} onChange={handleChange} />
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
                    {states.map((user, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                            </tr>
                        );
                    })}


                </tbody>
            </Table>

        </>
    )
}
export default Datafetch
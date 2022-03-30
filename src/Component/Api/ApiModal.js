import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useContext } from "react";
import { pro } from './Datafetch'

const ApiModal = (props) => {
    const [add, setAdd] = useState({
        id: props.users.id,
        firstname: props.users.firstname,
        Lastname: props.users.Lastname,
        email: props.users.email
    })
    const Access = useContext(pro);

    useEffect(() => {
        if (props.users)
            setAdd(props.users)
            console.log('showww',props.users)
    }, [props.users])
    const handleChange = (e) => {
        setAdd({ ...add, [e.target.name]: e.target.value })
    }
    const handleput=()=>{
        props.sending(add)
        console.log('finall',add)
    }
    return (
        <Modal.Dialog>
            <Modal show={Access.show} onHide={props.close}>
                <Modal.Header closeButton>
                    <Modal.Title>User Details</Modal.Title>
                </Modal.Header>

                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter first Name" name="firstname" value={add.firstname} onChange={handleChange}></Form.Control>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" name="Lastname" value={add.Lastname} onChange={handleChange}></Form.Control>
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Enter Email" name="email" value={add.email} onChange={handleChange}></Form.Control>


                <Modal.Footer>

                    <Button variant="primary" onClick={handleput}>PUT</Button>
                </Modal.Footer>
            </Modal>
        </Modal.Dialog>
    )
}
export default ApiModal;
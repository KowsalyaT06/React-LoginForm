import React from "react"
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

const Modals = (props) => {
    console.log('jkdhsuf',props.send)
    const [datas, setDatas] = useState({
        name:props.send.name
    })
    const handleSave = (e) => {
        e.preventDefault()
        let dummy={
            id:props.send.id,
            name:datas.name
        }
        console.log("Modals",dummy)
        props.sending(dummy)
        // console.log(dispatch)
    }
    return (
        <Modal.Dialog>
            <Modal show={props.show} onHide={props.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Todo List</Modal.Title>
                </Modal.Header>
                <Form.Label>Edit List</Form.Label>
                <Form.Control type="text" placeholder="Enter List" value={datas.name} onChange={e => setDatas(e.target.value)}></Form.Control>

                <Modal.Footer>

                    <Button variant="primary" onClick={handleSave}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        </Modal.Dialog>
    )
}
export default Modals
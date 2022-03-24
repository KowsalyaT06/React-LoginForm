import React from "react";
import { Actions } from "./Todos";
import './Todo.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
function Todo({ todoss, Key, dispatch }) {
    console.log('Todo', [todoss, dispatch])
    const [datas, setDatas] = useState({})
    const [input, setInput] =useState(datas)
    const [ModalOpen, setModalOpen] = useState(false)
    const isOpen = () => {
        setModalOpen(true);

    }
    const isclose = () => {
        setModalOpen(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setInput(todoss)
        isOpen()
        
    }
    const handleSave = (e) => {
        e.preventDefault()
        console.log(input)
        dispatch({ type: Actions.Edit, payload: input })
        console.log(dispatch)
    }
    return (


        <div className="todo" >
            <span style={{ color: "green" }}>
                {todoss.name}
            </span>

            <Button variant="danger" className="todo__delete" onClick={() => { dispatch({ type: Actions.Delete, payload: { id: todoss.id } }) }}>
                DELETE
            </Button>
            <Button variant="warning"  onClick={handleSubmit}>
                EDIT
            </Button>
            <Modal.Dialog>
                <Modal show={ModalOpen} onHide={isclose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Todo List</Modal.Title>
                    </Modal.Header>
                    <Form.Label>Edit List</Form.Label>
                    <Form.Control type="text" placeholder="Enter List" value={input.names}  onChange={e => setDatas(e.target.value)}></Form.Control>

                    <Modal.Footer>

                        <Button variant="primary" onClick={handleSave}>Save changes</Button>
                    </Modal.Footer>
                </Modal>
            </Modal.Dialog>
        </div>

    )
}
export default Todo;
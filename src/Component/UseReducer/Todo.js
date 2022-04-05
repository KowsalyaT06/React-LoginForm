import React from "react";
import { Actions } from "./Todos";
// import './Todo.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, createContext } from "react";
import { Button } from "react-bootstrap";
import Modals from './Modals';

export const contextsss = createContext({});
function Todo({ todoss, dispatch, sendToReducer }) {
    console.log('Todo', [todoss, dispatch])

    // const [input, setInput] =useState(datas)

    const handleSubmit = (e, item) => {
        e.preventDefault()
        // setDatas(todoss)
        isOpen()

    }
    const [ModalOpen, setModalOpen] = useState(false)

    const isOpen = () => {
        setModalOpen(true);

    }
 
    const isclose = () => {
        setModalOpen(false);
    }
    const update = (datas) => {
        console.log("i am in todo", datas)
        sendToReducer(datas)
    }
    return (
        <contextsss.Provider value={{show:ModalOpen}}>
            <div className="todo" >
                <span style={{ color: "green" }}>
                    {todoss.name}
                </span>

                <Button variant="danger" className="todo__delete" onClick={() => { dispatch({ type: Actions.Delete, payload: { id: todoss.id } }) }}>
                    DELETE
                </Button>
                <Button variant="warning" onClick={handleSubmit}>
                    EDIT
                </Button>
                <Modals   send={todoss} sending= {update} close={isclose}/>
            </div>
        </contextsss.Provider>

    )
}
export default Todo;
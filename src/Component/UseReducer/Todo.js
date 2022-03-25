import React from "react";
import { Actions } from "./Todos";
import './Todo.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import {  Button } from "react-bootstrap";
import Modals from './Modals';

function Todo({ todoss, Key, dispatch,sendToReducer }) {
    console.log('Todo', [todoss, dispatch])
  
    // const [input, setInput] =useState(datas)
   
    const handleSubmit = (e,item) => {
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
       const update=(datas)=>{
           console.log("i am in todo",datas)
           sendToReducer(datas)
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
          <Modals show={ModalOpen} close={isclose} send={todoss} sending={update}/>
        </div>

    )
}
export default Todo;
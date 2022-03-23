import React from "react";
import { Actions } from "./Todos";
import './Todo.css'
function Todo({todoss,Key,dispatch}) {
    console.log('Todo',[todoss,dispatch])
    return (
        <div className="todo" >
            <span style={{ color: todoss.complete ? " blue" : "red" }}>
                {todoss.name}
            </span> 
            <button className="todo__toggle" onClick={() => { dispatch({ type: Actions.Toggle, payload: { id: todoss.id } }) }}>
                TOGGLE
            </button>
            <button className="todo__delete" onClick={() => { dispatch({ type: Actions.Delete, payload: { id: todoss.id } }) }}>
                DELETE
            </button>
        </div>
    )
}
export default Todo;
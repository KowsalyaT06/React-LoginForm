import { useReducer, useState } from "react";
import React from "react";
import Todo from './Todo';
import './Todos.css';

export const Actions = {
    Add: 'addTodo',
    // Toggle: 'toggletodo',
    Delete: 'deleteTodo',
    Edit: 'editTodo'
}

function reducer(todos, action) {
    switch (action.type) {
        case Actions.Add:
            console.log('new', todos)
            return [...todos, newTodo(action.payload)]

        // case Actions.toggletodo:
        //     return todos.map(todo => {
        //         if (todo.id === action.payload.id) {
        //             return { ...todo, complete: !todo.complete }
        //         }
        //         return todo
        //     })
        case Actions.Edit:
            console.log('actions', action.payload)
            console.log('todos', todos)
            let check = todos.findIndex((dat) => dat.id === action.payload.id)
            console.log('ans', check)
            todos.splice(check, 1, action.payload.name)
            return todos

        case Actions.Delete:
            return todos.filter(todo => todo.id !== action.payload.id)
        default:
            return todos
    }
}

function newTodo(name) {
    return { id: Date.now(), name: name, complete: false }
}

function Todos() {
    const [todos, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({ type: Actions.Add, payload: name })
        setName('')
    }

    const handleEdit = (data) => {
        console.log("original page", data)
        dispatch({ type: Actions.Edit, payload: data })
    }


    console.log('print', todos)

    return (
        <>
            <div className="todos">
                <div className='todos__content'>
                    <h2>MY APP</h2>
                    <div className="todos__forms">
                        <form className="todos__form" onSubmit={handleSubmit} >
                            <input className="todos__input" value={name} placeholder="Add List" onChange={e => setName(e.target.value)} />
                        </form>
                        {/* {todos.map(todo => {
                            return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
                        })} */}

                        <button className='todos__add__btn' onClick={handleSubmit}>
                            CREATE
                        </button>

                    </div>
                    <div className="todos__todo">
                        {(todos.map(todo => {
                            return <Todo Key={todo.id} todoss={todo} dispatch={dispatch} sendToReducer={() => handleEdit(todo)} />
                        }))}
                    </div>
                </div>
            </div>



        </>

    )
}
export default Todos
import { useReducer, useState } from "react";
import React from "react";
import Todo from './Todo';
import './Todos.css';

export const Actions = {
    Add: 'addTodo',
    Toggle: 'toggletodo',
    Delete: 'deleteTodo'
}

function reducer(todos, action) {
    switch (action.type) {
        case Actions.Add:
            return [...todos, newTodo(action.payload.name)]

        case Actions.toggletodo:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete }
                }
                return todo
            })

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
        dispatch({ type: Actions.Add, payload: { name: name } })
        setName('')
    }

    return (
        <>
            <div className="todos">
                <div className='todos__content'>
                    <h2>MY APP</h2>
                    <div className="todos__forms">
                        <form className="todos__form" onSubmit={handleSubmit} >
                            <input className="todos__input" value={name} placeholder="Add todo" onChange={e => setName(e.target.value)} />
                        </form>
                        {/* {todos.map(todo => {
                            return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
                        })} */}
                        <button className='todos__add__btn' onClick={handleSubmit}>
                            CREATE
                        </button>

                    </div>
                    {todos && todos[0]?.name}
                    <div className="todos__todo">
                        {todos.length!==0 && (todos.map(todo => {
                            return <Todo Key={todo.id} todoss={todo} dispatch={dispatch} />
                        }))}
                    </div>
                </div>
            </div>

            {/* <Todo /> */}

        </>

    )
}
export default Todos
import React from 'react'

const Todo = props => {
    return (
        <div className='Todo' onClick={() => props.dispatch({type: 'TOGGLE_COMPLETED', payload: props.todo.id})}>
            <h2>{props.todo.item}</h2>
            <p>Is completed? {props.todo.completed ? 'Yes' : 'No'}</p>
        </div>
    )
}

export default Todo
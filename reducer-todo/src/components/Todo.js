import React from 'react'

const Todo = props => {
    return (
        <div className='Todo' 
            onClick={() => props.dispatch({type: 'TOGGLE_COMPLETED', payload: props.todo.id})}
            style={props.todo.completed ? {color: 'green'} : {color: 'orange'}}
        >
            <h2>{props.todo.item}</h2>
            <p>Is completed? {props.todo.completed ? 'Yes' : 'No'}</p>
            {props.todo.completed ? <p>Time Completed: {props.todo.timeCompleted}</p> : null}
        </div>
    )
}

export default Todo

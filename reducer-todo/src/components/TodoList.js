import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    return (
        <div className='TodoList'>
            {props.state.todoList.map(item => {
                return <Todo todo={item}/>
            })}
        </div>
    )
}

export default TodoList
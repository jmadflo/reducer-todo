import React from 'react'
import Todo from './Todo'

const TodoList = props => {
    return (
        <div className='TodoList'>
            {props.state.todoList.map(item => {
                return <Todo key={item.id} todo={item} dispatch={props.dispatch}/>
            })}
        </div>
    )
}

export default TodoList
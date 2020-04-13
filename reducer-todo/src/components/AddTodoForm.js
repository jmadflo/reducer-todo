import React, {useState} from 'react'

const AddTodoForm = props => {

    const [inputVal, setInputVal] = useState('')

    const submitForm = event => {
        event.preventDefault()
        props.dispatch({type: 'ADD_TODO', payload: inputVal})
        setInputVal('')
    }
    const clearCompleted = event => {
        event.preventDefault()
        props.dispatch({type: 'CLEAR_COMPLETED'})
    }

    return (
        <form>
            <input name='newItem' type='text' value={inputVal} onChange={event => setInputVal(event.target.value)}/>
            <button onClick={submitForm}>+</button>
            <button onClick={clearCompleted}>Clear Completed</button>
        </form>
    )
}

export default AddTodoForm
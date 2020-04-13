import React, {useState} from 'react'

const AddTodoForm = props => {

    const [inputVal, setInputVal] = useState('')

    const submitForm = event => {
        event.preventDefault()
        props.dispatch({type: 'ADD_TODO', payload: inputVal})
        setInputVal('')
    }

    return (
        <form>
            <input name='newItem' type='text' value={inputVal} onChange={event => setInputVal(event.target.value)}/>
            <button onClick={submitForm}>+</button>
        </form>
    )
}

export default AddTodoForm
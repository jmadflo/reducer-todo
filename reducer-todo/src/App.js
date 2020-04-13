import React, {useReducer} from 'react'
import { listReducer, initialState } from './reducers/listReducer'
import TodoList from './components/TodoList'
import AddTodoForm from './components/AddTodoForm'
import './App.css'

function App() {
  const [ state, dispatch ] = useReducer(listReducer, initialState)

  return (
    <div className='App'>
      <h1>Todo List App</h1>
      <AddTodoForm dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch}/>
    </div>
  )
}

export default App

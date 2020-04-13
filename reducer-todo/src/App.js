import React, {useReducer} from 'react'
import { listReducer, initialState } from './reducers/listReducer'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  const [ state, dispatch ] = useReducer(listReducer, initialState)

  return (
    <>
      <h1>Todo List App</h1>
      <TodoList state={state}/>
    </>
  )
}

export default App

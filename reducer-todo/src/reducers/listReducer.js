import moment from 'moment'

export const listReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TODO':
            return({
                todoList: [ 
                    ...state.todoList, 
                    {
                        item: action.payload, 
                        completed: false, 
                        id: Date.now(),
                        timeCompleted: null
                    }
                ]
            })
        case 'TOGGLE_COMPLETED':
            return({
                todoList: state.todoList.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed,
                            timeCompleted: todo.completed ? null : moment().format('HH:mm')
                        }
                    }
                    return todo
                })

            })
        case 'CLEAR_COMPLETED':
            return({
                todoList: state.todoList.filter(todo => {
                    return todo.completed === false
                })
            })
        default:
            return state
    }
}

export const initialState = {
    todoList: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589,
            timeCompleted: null
        }
    ], 
}

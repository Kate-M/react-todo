import undoable, { includeAction } from 'redux-undo'
import { tasksData } from './initialState'

const todo = (context, state, action, categoryId) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        id: Math.max(...context.map(task => task.id)) + 1,
        taskName: action.taskName,
        categoryId: action.categoryId,
        completed: false
      }
    case 'EDIT_TASK':
      if (state.id === action.id) {
        return {
          ...state,
          editable: true
        };
      }
    case 'CANCEL_TASK':
      if (state.id === action.id) {
        return {
          ...state,
          editable: false
        };
      }
    case 'UPDATE_TASK':
      if (state.id === action.id) {
        return {
          ...state,
          taskName: action.taskName,
          description: action.description,
          editable: false
        };
      }
    case 'TOGGLE_TASK':
      if (state.id === action.id) {
        return {
          ...state,
          completed: !state.completed
        };
      }
    default:
      return state
  }
}

const todos = (state = tasksData, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        todo(state, undefined, action, action.categoryId)
      ]
    case 'EDIT_TASK':
      return state.map(task =>
        todo(state, task, action)
      )
    case 'UPDATE_TASK':
      return state.map(task =>
        todo(state, task, action)
      )
    case 'CANCEL_TASK':
      return state.map(task =>
        todo(state, task, action)
      )
    case 'TOGGLE_TASK':
      return state.map(task =>
        todo(state, task, action)
      )
    case 'DELETE_CATEGORY':
      return state.filter(task => task.categoryId !== action.id)  
    default:
      return state
  }
}

const undoableTodos = undoable(todos, { filter: includeAction(['ADD_TASK', 'UPDATE_TASK', 'DELETE_TASK', 'TOGGLE_TASK']) })

export default undoableTodos

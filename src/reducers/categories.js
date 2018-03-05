import undoable, { includeAction } from 'redux-undo'
import { categoryData } from './initialState'

const todo = (context, state, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return {
        id: Math.max(...context.map(cat => cat.id)) + 1,
        categoryName: action.categoryName,
        completed: false
      }
    case 'EDIT_CATEGORY':
      if (state.id === action.id) {
        return {
          ...state,
          editable: true
        };
      }
    case 'UPDATE_CATEGORY':
      if (state.id === action.id) {
        return {
          ...state,
          categoryName: action.categoryName,
          editable: false
        };
      }

    case 'TOGGLE_CATEGORY':
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

const todos = (state = categoryData, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return [
        ...state,
        todo(state, undefined, action)
      ]
    case 'DELETE_CATEGORY':
      return state.filter(cat => cat.id !== action.id)
    case 'EDIT_CATEGORY':
      return state.map(cat =>
        todo(state, cat, action)
      )
    case 'UPDATE_CATEGORY':
      return state.map(cat =>
        todo(state, cat, action)
      )
    case 'TOGGLE_CATEGORY':
      return state.map(cat =>
        todo(state, cat, action)
      )
    default:
      return state
  }
}

const undoableTodos = undoable(todos, { filter: includeAction(['ADD_CATEGORY', 'UPDATE_CATEGORY', 'DELETE_CATEGORY', 'TOGGLE_CATEGORY']) })

export default undoableTodos

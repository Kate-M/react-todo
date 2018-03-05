const visibilityFilterTasks = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER_TASKS':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilterTasks

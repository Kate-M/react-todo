const visibilityFilterCategory = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER_CATEGORY':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilterCategory

export const addCategory = (categoryName) => ({
  type: 'ADD_CATEGORY',
  categoryName
})
export const deleteCategory = (id) => ({
  type: 'DELETE_CATEGORY',
  id
})
export const editCategory = (id) => ({
  type: 'EDIT_CATEGORY',
  id
})
export const updateCategory = (id, categoryName) => ({
  type: 'UPDATE_CATEGORY',
  id,
  categoryName
})
export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})
export const toggleCategory = (id) => ({
  type: 'TOGGLE_CATEGORY',
  id
})
export const selectCategory = (id) => ({
  type: 'SELECT_CATEGORY',
  id
})
export const addTask = (categoryId, taskName) => ({
  type: 'ADD_TASK',
  categoryId,
  taskName,
})
export const editTask = (id) => ({
  type: 'EDIT_TASK',
  id
})
export const cancelTask = (id) => ({
  type: 'CANCEL_TASK',
  id
})
export const updateTask = (id, taskName, description) => ({
  type: 'UPDATE_TASK',
  id,
  taskName,
  description
})
export const searchTask = (search) => ({
  type: 'SEARCH_TODO',
  search
})
export const setVisibilityFilterTasks = (filter) => ({
  type: 'SET_VISIBILITY_FILTER_TASKS',
  filter
})
export const toggleTask = (id, completed) => ({
  type: 'TOGGLE_TASK',
  id,
  completed
})

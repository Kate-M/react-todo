import { combineReducers } from 'redux'
import categories from './categories'
import tasks from './tasks'
import visibilityFilterCategory from './visibilityFilterCategory'
import visibilityFilterTasks from './visibilityFilterTasks'
import searchFilter from './searchFilter'
import activeCategory from './activeCategory'

const todoApp = combineReducers({
  categories,
  tasks,
  visibilityFilterCategory,
  visibilityFilterTasks,
  searchFilter,
  activeCategory
})

export default todoApp

import { connect } from 'react-redux'
import TaskList from '../../components/task/TaskList'
import { toggleTask } from '../../actions/actions'

const getByVisibilityFilter = (filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return (td) => true;
    case 'SHOW_COMPLETED':
      return (td) => td.completed;
  }
}

const getByCategory = (categoryId) => {
  return (td) => td.categoryId === categoryId;
}
const getBySearchString = (searchString) => {
  return (td) => !searchString || td.taskName.toLowerCase().startsWith(searchString.toLowerCase());
}
const mapStateToProps = (state, ownProps) => ({
  tasks: state.tasks.present.filter(getByCategory(parseInt(ownProps.activeCategory)))
    .filter(getByVisibilityFilter(state.visibilityFilterTasks))
    .filter(getBySearchString(state.searchFilter))
    .reverse()

})

const mapDispatchToProps = ({
  onTaskClick: toggleTask
})

const VisibleTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)
export default VisibleTaskList

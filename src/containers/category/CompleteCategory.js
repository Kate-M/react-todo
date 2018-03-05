import { connect } from 'react-redux'
import CategoryContent from '../../components/category/CategoryContent'
import { toggleTask } from '../actions/actions'


const mapStateToProps = (state) => ({
  completedCategories: state.tasks.present.filter(i => i.completed).length === state.tasks.present.length
    ? true
    : false
})

const mapDispatchToProps = ({

})

const completedCount = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryContent)

export default CompletedCategory

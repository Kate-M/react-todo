import { connect } from 'react-redux'
import ProgressBar from '../components/ProgressBar'


const mapStateToProps = (state) => ({
  percentCompleted: ((state.categories.present.filter(cat =>
    state.tasks.present.filter(t => t.categoryId === cat.id)
      .every(el => el.completed === true)
  ).length) / state.categories.present.length) * 100
})

const mapDispatchToProps = ({

})

const completedCount = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgressBar)

export default completedCount

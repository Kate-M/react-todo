import { connect } from 'react-redux'
import CategoryItem from '../../components/category/CategoryItem'
import { selectCategory } from '../../actions/actions'

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSelectClick: () => {
    dispatch(selectCategory(ownProps.id))
  }
})

const mapStateToProps = (state, ownProps) => ({

})

const SelectCategory = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryItem)

export default SelectCategory

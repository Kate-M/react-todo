import { connect } from 'react-redux'
import CategoryList from '../../components/category/CategoryList'
import { toggleCategory } from '../../actions/actions'

const getByVisibilityFilter = (filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return (td) => true;
    case 'SHOW_COMPLETED':
      return (td) => td.completed;
  }
}
const mapStateToProps = (state, ownProps) => ({
  activeCategory: ownProps.match.params.categoryId,
  categories: state.categories.present
    .filter(getByVisibilityFilter(state.visibilityFilterCategory))
    .reverse()
})
const mapDispatchToProps = ({
  onCategoryClick: toggleCategory
})
const VisibleCategoryList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList)

export default VisibleCategoryList

import React from 'react'
import { connect } from 'react-redux'
import Button from '../../components/Button'
import { deleteCategory } from '../../actions/actions'

class DeleteCategory extends React.Component {
  render() {
    return (
      <Button onClick={this.deleteItem.bind(this)} nameButtonIcon={'icon-remove'}></Button>
    )
  }
  deleteItem(event) {
    event.preventDefault();
    this.props.onDeleteCategory(this.props.id);
  }
}

const mapStateToProps = (state) => ({
  categories: state
})
const mapDispatchToProps = (dispatch, id) => ({
  onDeleteCategory: (id) => {
    dispatch(deleteCategory(id));
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteCategory)
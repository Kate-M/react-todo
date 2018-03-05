import React from 'react'
import { connect } from 'react-redux'
import Button from '../../components/Button'
import { editCategory, updateCategory } from '../../actions/actions'
import styled from 'styled-components';

const EditForm = styled.form`
    display:flex;
    width:100%;
    justify-content: space-between;
`;
const CategoryWrapper = styled.div`
    display:flex;
`;

class EditCategory extends React.Component {
  renderDefault() {
    return (
      <CategoryWrapper>
        <Button onClick={this.editItem.bind(this)} nameButtonIcon={'icon-edit'}></Button>
      </CategoryWrapper>
    )
  }
  renderForm() {
    return (
      <EditForm onSubmit={this.updateItem.bind(this)}>
        <input type="text" defaultValue={this.props.categoryName} ref="editableInput" />
        <Button type="submit" nameButtonIcon={'icon-save'}></Button>
      </EditForm>
    )
  }
  render() {
    if (this.props.editable) {
      return this.renderForm();
    } else {
      return this.renderDefault();
    }
  }
  editItem(event) {
    event.preventDefault();
    this.props.onEditCategory(this.props.id);
  }
  updateItem(event) {
    event.preventDefault();
    let editableValue = this.refs.editableInput.value;
    if (!editableValue.trim()) {
      return
    }
    this.props.onUpdateCategory(this.props.id, editableValue);
  }
}
const mapStateToProps = (state) => ({
  categories: state
})
const mapDispatchToProps = (dispatch, id, categoryName) => ({
  onEditCategory: (id) => {
    dispatch(editCategory(id));
  },
  onUpdateCategory: (id, categoryName) => {
    dispatch(updateCategory(id, categoryName));
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCategory)
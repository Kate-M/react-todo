import React from 'react'
import { connect } from 'react-redux'
import { addCategory } from '../../actions/actions'
import Button from '../../components/Button'
import styled from 'styled-components'

const AddForm = styled.form`
    margin-bottom: 30px;
    display:flex;
    justify-content:center;
    input {
      width:100%;
    }
`;

class AddCategory extends React.Component {
  render() {
    return (
      <AddForm>
        <input ref="newCategory" placeholder="Enter category title" />
        <Button type="submit" nameButtonIcon={'icon-add'} onClick={this.addItem.bind(this)}></Button>
      </AddForm>
    )
  }
  addItem(event) {
    event.preventDefault();
    let newCategory = this.refs.newCategory.value;
    if (!newCategory.trim()) {
      return
    }
    this.props.onAddCategory(newCategory);
    this.refs.newCategory.value = '';
  }
}

const mapStateToProps = (state) => ({
  categories: state
})
const mapDispatchToProps = (dispatch, categoryName) => ({
  onAddCategory: (categoryName) => {
    dispatch(addCategory(categoryName));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCategory)
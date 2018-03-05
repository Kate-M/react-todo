import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../../actions/actions'
import Button from '../../components/Button'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const AddForm = styled.form`
    margin-bottom: 30px;
    display:flex;
    justify-content:flex-end;
    input {
      width:50%;
    }
`;
const IntroMessage = styled.p`
    display:flex;
    justify-content:center;
    ${breakpoint('tablet') `
      margin-bottom: 30px;
    `}
`;
class AddTask extends React.Component {
  render() {
    if (this.props.activeCategory && this.props.categories.find(t => t.id == this.props.activeCategory)) {
      return (
        <AddForm>
          <input ref="newTask" placeholder="Enter task title" />
          <Button type="submit" nameButtonIcon={'icon-add'} onClick={this.addItem.bind(this)}></Button>
        </AddForm>
      )
    }
    else {
      return (<IntroMessage>Select category</IntroMessage>)
    }
  }
  addItem(event) {
    event.preventDefault();
    let newTask = this.refs.newTask.value;
    if (!newTask.trim()) {
      return
    }
    this.props.onAddTask(parseInt(this.props.activeCategory), newTask);
    this.refs.newTask.value = '';
  }
}

const mapStateToProps = (state) => ({
  tasks: state,
  categories: state.categories.present
})
const mapDispatchToProps = (dispatch, categoryId, taskName) => ({
  onAddTask: (categoryId, taskName) => {
    dispatch(addTask(categoryId, taskName));
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTask)
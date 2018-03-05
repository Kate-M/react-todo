import React from 'react'
import { connect } from 'react-redux'
import Button from '../../components/Button'
import { editTask, cancelTask, updateTask } from '../../actions/actions'
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

const EditForm = styled.form`
    display:flex;
    width:100%;
    flex-wrap:wrap;
    ${breakpoint('mobile') `
        justify-content: center;
    `}
    ${breakpoint('tablet') `
        justify-content: space-between;
    `}
`;
const ButtonGroup = styled.div`
  display:flex;
  ${breakpoint('mobile') `
    padding-top: 15px;
    width: 100%;
    justify-content: flex-end;
  `}
    ${breakpoint('tablet') `
        width: auto;
    `}
`;
class EditTask extends React.Component {
    render() {
        if (this.props.editable) {
            return this.renderForm();
        } else {
            return this.renderDefault();
        }
    }

    renderDefault() {
        return (
            <form>
                <Button onClick={this.editItem.bind(this)} nameButtonIcon={'icon-edit'}>
                    Edit
                </Button>
            </form>
        )
    }

    renderForm() {
        return (
            <EditForm>
                <input type="text" defaultValue={this.props.taskName} ref="taskName" />
                <textarea className="description-area" type="text" ref="taskDescription" defaultValue={this.props.description}></textarea>
                <ButtonGroup>
                    <Button type="submit" nameButtonIcon={'icon-save'}
                        onClick={this.updateItem.bind(this)}>
                    </Button>
                    <Button type="submit" nameButtonIcon={'icon-cancel'}
                        onClick={this.cancelItem.bind(this)}
                    ></Button>
                </ButtonGroup>
            </EditForm>
        )
    }
    editItem(event) {
        event.preventDefault();
        this.props.onEditTask(this.props.id);
    }
    updateItem(event) {
        event.preventDefault();
        let taskName = this.refs.taskName.value;
        let taskDescription = this.refs.taskDescription.value;
        if (!taskName.trim() || !taskDescription.trim()) {
            return
        }
        this.props.onUpdateTask(this.props.id, taskName, taskDescription);

    }
    cancelItem(event) {
        event.preventDefault();
        this.props.onCancelTask(this.props.id);
    }
}
const mapStateToProps = (state) => ({
    tasks: state
})
const mapDispatchToProps = (dispatch, id, taskName, description) => ({
    onEditTask: (id) => {
        dispatch(editTask(id));
    },
    onCancelTask: (id) => {
        dispatch(cancelTask(id));
    },
    onUpdateTask: (id, taskName, description) => {
        dispatch(updateTask(id, taskName, description));
    }
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditTask)


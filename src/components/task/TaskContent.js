import React from 'react'
import Checkbox from '../../components/Checkbox'
import TaskItem from './TaskItem'
import EditTask from '../../containers/task/EditTask'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const Item = styled.li`
  display:inline-flex;
  align-items:center;
  justify-content: space-between;
  padding:30px;
  background:white;
  box-shadow:1px 1px 1px 1px rgba(0,0,0,.2);
  border-left: 4px solid;
  &:not(:last-child) {
    margin-bottom:15px;
  }
  ${breakpoint('mobile') `
   flex-direction:column;
  `}
  ${breakpoint('tablet') `
   flex-direction:row;
  `}
`;

class TaskContent extends React.Component {
  render() {
    return (
      <Item style={{
        borderColor: this.props.completed ? '#4FA150' : '#168BB9'
      }}>
        <Checkbox onChange={this.props.onClick} checked={this.props.completed} />
        <TaskItem {...this.props} />
        <EditTask className="button-edit" {...this.props} />
      </Item>
    );
  }
}
export default TaskContent

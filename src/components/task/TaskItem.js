import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const TaskLink = styled(Link) `
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${breakpoint('mobile') `
    line-height:2.5;
    width:auto;
  `}
  ${breakpoint('tablet') `
    width:100%;
    line-height:1.5;
  `}
`;
export default class TaskItem extends React.Component {
  render() {
    if (!this.props.editable)
      return (
        <TaskLink to={`/${this.props.categoryId}/${this.props.taskName}`}>
          {this.props.taskName}
        </TaskLink>
      )
    return (null)
  }
}



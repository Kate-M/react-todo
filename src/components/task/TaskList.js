import React from 'react'
import TaskContent from './TaskContent'
import styled from 'styled-components'

const Tasks = styled.ul`
    display:flex;
    flex-direction:column;
    padding: 0 20px;
`;
const TaskList = ({ tasks, onTaskClick }) => (
  <Tasks>
    {tasks.map(task =>
      <TaskContent
        key={task.id}
        {...task}
        onClick={() => onTaskClick(task.id, !task.completed)}
      />
    )}
  </Tasks>

)
export default TaskList

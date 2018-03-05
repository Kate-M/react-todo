import React from 'react'
import styled from 'styled-components';

const ProgressLine = styled.progress`
    width:100%;
    margin-top:10px;
    -webkit-appearance: none;
   appearance: none;
`;
const ProgressBar = ({ percentCompleted }) => (
  <ProgressLine value={percentCompleted} max="100"></ProgressLine>
)
export default ProgressBar



import React from 'react'
import SearchTask from '../containers/task/SearchTask'
import styled from 'styled-components'
import ProgressCounter from '../containers/ProgressCounter';

const HeaderWrap = styled.div`
    width:100%;
`;
const HeaderTop = styled.div`
   display:flex;
   flex-wrap:wrap;
   justify-content:space-between;
   padding:20px;
   align-items:center;
`;
const Title = styled.h1`
    line-height:3;
`;
export default class Header extends React.Component {
  render() {
    return (
      <HeaderWrap>
        <HeaderTop>
          <Title>To do List</Title>
          <SearchTask></SearchTask>
        </HeaderTop>
        <ProgressCounter></ProgressCounter>
      </HeaderWrap>
    );
  }
}

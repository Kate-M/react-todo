import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Header from './Header'
import VisibleTaskList from '../containers/task/VisibleTaskList'
import AddCategory from '../containers/category/AddCategory'
import AddTask from '../containers/task/AddTask'
import VisibleCategoryList from '../containers/category/VisibleCategoryList'
import UndoRedo from '../containers/UndoRedo'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  height:auto;
`;
const Heading = styled.header`
  display:flex;
  flex-wrap:wrap;
  background: #464B57;
  color:white;
`;
const Todo = styled.main`
  background:#CEE0E6;
 `;
const ToDoList = styled.section`
  display:flex;
  flex-wrap:wrap;
  min-height:100vh;
  padding-bottom: 30px;
`;
const Categories = styled.div`
  padding-bottom: 30px;
  ${breakpoint('mobile') `
   background:#ECEFF2;
   width:100%;
   padding: 30px 20px;
  `}
  ${breakpoint('tablet') `
    width: 40%;
  `}
  
`;
const Tasks = styled.div`
  padding: 0 10px;
  background:#CEE0E6;
  ${breakpoint('mobile') `
    width:100%;
    padding-top:20px;
  `}
  ${breakpoint('tablet') `
    width: 60%;
    padding-top:0;
  `}
`;
class App extends React.Component {
  render() {
    return (
      <Container>
        <Heading>
          <Header />
        </Heading>
        <Todo>
          <UndoRedo />
          <ToDoList>
            <Categories>
              <AddCategory />
              <VisibleCategoryList {...this.props}/>
            </Categories>
            <Tasks>
              <AddTask {...this.props}/>
              <VisibleTaskList {...this.props}/>
            </Tasks>
          </ToDoList>
        </Todo>
      </Container>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  activeCategory: ownProps.match.params.categoryId
})

const mapDispatchToProps = ({
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App))

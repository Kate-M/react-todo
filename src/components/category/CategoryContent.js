import React from 'react'
import DeleteCategory from '../../containers/category/DeleteCategory'
import EditCategory from '../../containers/category/EditCategory'
import SelectCategory from '../../containers/category/SelectCategory'
import styled from 'styled-components'

const Item = styled.li`
  padding: 0;
  display:inline-flex;
  align-items:center;
  justify-content: space-between;
  padding:15px;
  background:white;
  box-shadow:1px 1px 1px 1px rgba(0,0,0,.2);
  border-left: 4px solid #A11C3D;
  &:not(:last-child) {
    margin-bottom:15px;
  }
`;
const ButtonGroup = styled.div`
  display:flex;
  width:100%;
  justify-content: flex-end;
`;
class CategoryContent extends React.Component {
  render() {
    return (
      <Item>
        <SelectCategory {...this.props} />
        <ButtonGroup>
          <EditCategory className="button-edit" {...this.props} />
          <DeleteCategory className="button-delete" id={this.props.id} />
        </ButtonGroup>
      </Item>
    );
  }
}


export default CategoryContent

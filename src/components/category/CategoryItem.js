import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CategoryLink = styled(Link) `
  font-size: 1rem;
  line-height:1.5;
  width:100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export default class CategoryItem extends React.Component {
  render() {
    if (!this.props.editable)
      return (
        <CategoryLink to={`/${this.props.categoryId}`}
          onClick={() => {
            this.props.onSelectClick()
          }}
        >
          {this.props.categoryName}
        </CategoryLink>
      )
    return (null)
  }
}



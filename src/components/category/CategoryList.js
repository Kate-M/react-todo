import React from 'react'
import CategoryContent from './CategoryContent'
import styled from 'styled-components'

const Categories = styled.ul`
    display:flex;
    flex-direction:column;
`;
const CategoriesList = ({ categories, onCategoryClick }) => (
  <Categories>
    {categories.map(category =>
      <CategoryContent
        key={category.categoryId}
        {...category}
        onClick={() => onCategoryClick(category.id)}
      />
    )}
  </Categories>

)
export default CategoriesList

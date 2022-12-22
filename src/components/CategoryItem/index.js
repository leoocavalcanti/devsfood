import React from 'react'
import * as C from "./styles"

const CategoryItem = ({data, image, activeCategory, setActiveCategory}) => {

    const handleCategory = () => {

        setActiveCategory(data.id)
    }

  return (
    <C.Container onClick={handleCategory} active={activeCategory} id={data.id}>
        <C.CategoryImage src={image ? image : data.image} />
    </C.Container>
  )
}

export default CategoryItem
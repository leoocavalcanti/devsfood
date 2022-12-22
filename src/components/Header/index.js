import React from 'react'
import * as C from "./styles"
import logoImage from "../../assets/logo.png"
import searchImage from "../../assets/search.png"

const Header = ({search, onSearch}) => {

    const [activeFocus, setActiveFocus] = React.useState(false);

    const handleChange = (e) => {

        onSearch(e.target.value);
    }

    const handleFocus = () => {

        setActiveFocus(true);
    }

    const handleBlur = (e) => {

        if(!search) setActiveFocus(false);
    }


  return (
    <C.Container>
            <C.Logo src={logoImage}/> 
            <C.SearchInput active={activeFocus} onFocus={handleFocus} onBlur={handleBlur} value={search} onChange={handleChange} img={searchImage} type="text" placeholder="Digite um produto..."/>
    </C.Container>
  )
}

export default Header
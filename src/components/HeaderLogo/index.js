import React from 'react'
import * as C from "./styles"
import logoImage from "../../assets/logo.png"

const HeaderLogo = () => {
  return (
    <C.Container>
    <C.Logo src={logoImage}/> 
    </C.Container>
  )
}

export default HeaderLogo
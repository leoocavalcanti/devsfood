import React from 'react'
import * as C from "./styles";

const LoadingArea = () => {
  return (
    <C.Container>
        <C.Circle></C.Circle>
        <C.Line></C.Line>
        <C.Circle></C.Circle>
        <C.Line className="grey"></C.Line>
        <C.Circle className="grey"></C.Circle>
    </C.Container>
  )
}

export default LoadingArea
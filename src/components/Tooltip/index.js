import React from 'react'
import * as C from "./styles"

const Tooltip = ({title}) => {
  return (
    <C.Container>
        <div className="tooltip">
        <span className="tooltiptext">{title}</span>
        </div>
    </C.Container>
  )
}

export default Tooltip
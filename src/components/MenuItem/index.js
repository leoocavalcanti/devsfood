import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Tooltip from '../Tooltip/index.js';
import * as C from "./styles.js"

const MenuItem = ({icon, link, title}) => {

    const navigate = useNavigate();
    const location = useLocation();
    const [tooltip, SetToolTip] = React.useState(false);

    let isActive = location.pathname === link;

    const handleClick = (e) => {

        e.preventDefault();
        navigate(link)

    }

    const handleToolTip = () => {

        SetToolTip(true);
    }
    
  return (
    <C.LinkArea onMouseOver={handleToolTip} active={isActive} href={link} onClick={handleClick}>

        <C.LinkIcon src={icon}/>
        {tooltip && <Tooltip title={title}/>}
    </C.LinkArea>
    
  )
}

export default MenuItem
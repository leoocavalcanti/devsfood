import styled from "styled-components"

export const Container = styled.div`


.tooltip {
  position: relative;
  top: 0px;
  left: 10px;
  display: inline-block;
  width: 50px;
  height: 50px;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #111;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  top: -5px;
  left: 105%;
 
  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}

.tooltip .tooltiptext::after {
  content: " ";
  position: absolute;
  top: 50%;
  right: 100%; /* To the left of the tooltip */
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent black transparent transparent;
}

`
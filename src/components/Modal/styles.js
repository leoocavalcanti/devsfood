import styled from "styled-components"

export const Container = styled.div(({status}) => (

    `

    display: ${status ? "flex" : "none"};
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #00000070;
    z-index: 900;
    justify-content: center;
    align-items: center;
    

    `

))


export const ModalBody = styled.div`

    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 0px 50px #000;
    max-height: 95vw;
    max-width: 100vh;
    overflow: auto;

`
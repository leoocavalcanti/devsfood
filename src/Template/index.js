import styled from "styled-components"

export const Container = styled.div`

    display: flex;
    height: 100vh;
`

export const Menu = styled.div`

    display: flex;
    width: 85px;
    background-color: #136713;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

`

export const PageBody = styled.div(({bg}) => (


    `

    display: flex;
    flex: 1;
    background-color: #00980D;
    background-image: url(${bg});
    overflow-y: auto;

    `

))

export const Cart = styled.div`


`
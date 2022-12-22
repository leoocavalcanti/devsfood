import styled from "styled-components";


export const Container = styled.div(({active, id}) => (


    `

    width: 80px;
    height: 80px;
    background-color: ${active === id ? "#FFF" : "#AAE09A"};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-right: 20px;
    transition: all ease .3s;
    cursor: pointer;

    `
    
))

export const CategoryImage = styled.img`

    width: 55px;
    height: 55px;

`
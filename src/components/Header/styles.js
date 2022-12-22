import styled from "styled-components"

export const Container = styled.div`

    background-color: #136713;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 3px #222;
`

export const Logo = styled.img`

    height: 70px;
    width: auto;
`

export const SearchInput = styled.input(({img, active}) => (


    `

    border: 0;
    border-radius: 25px;
    width: ${active ? "300" : "0"}px;
    height: 50px;
    background-color: #fff;
    background-image: url(${img});
    background-size: 30px;
    background-repeat: no-repeat;
    background-position: 10px center;
    padding-left: 50px;
    cursor: pointer;
    outline: 0;
    transition: 0.3s;
    font-size: 16px;

    &:focus{

        cursor: text;
    }

    `
))
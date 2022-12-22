import styled from "styled-components"

export const Container = styled.div`

    width: 100%;
    padding: 15px 20px;
`

export const CategoryArea = styled.div`

    color: #fff;
    margin-top: 20px;
    text-align: center;

    span{

        font-size: 17px;
    }


`


export const CategoryList = styled.div`

    display: flex;
    margin-top: 20px;
    justify-content: center;
    align-items: center;

`

export const ProductArea = styled.div`


    margin: 20px 0;

`

export const ProductList = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;

`

export const ProductPaginationArea = styled.div`

    display: flex;
    flex-wrap: wrap;

`

export const ProductPaginationItem = styled.div(({active, current}) => (

    `

    background-color: ${active === current ? "#FFF" : "#CDCDCD"};
    transition: 0.2s;
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    cursor: pointer;
    margin-right: 10px;
    color: #136713;

    `


))
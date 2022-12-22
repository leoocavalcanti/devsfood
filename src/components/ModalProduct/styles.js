import styled from "styled-components"

export const Container = styled.div`

    width: 650px;
    padding: 20px;

`

export const ProductArea = styled.div`

    height: 200px;
    display: flex;

`

export const ProductButtons = styled.div`

    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const ProductPhoto = styled.img`

    width: 310px;
    border-radius: 10px;


`

export const ProductInfoArea = styled.div`

    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    
`

export const ProductDetails = styled.div`

    margin-bottom: 20px;

`

export const ProductQuantityArea = styled.div`

    height: 50px;
    display: flex;
    justify-content: space-between;

`

export const ProductName = styled.div`

    font-size: 30px;
    font-weight: bold;

`

export const ProductIngredients = styled.div`

    font-size: 14px;

`

export const ProductButton = styled.button(({small}) => (


    `

    border: 0;
    background-color: ${small ? "#AB2E46" : "#073c07"};
    box-shadow: 0px 0px 8px #00000056;
    color: #fff;
    font-size: ${small ? "13" : "22"}px;
    font-weight: bold;
    padding: ${small ? "8px 10px" : "10px 8px"};
    margin-left: 10px;
    border-radius: 5px;
    cursor: pointer;

    `


))

export const ProductQuantity = styled.div`

    display: flex;
    align-items: center;
    background-color: #073c07;
    border-radius: 5px;

`

export const ProductQtImage = styled.img`

    width: 24px;
    height: auto;
    margin: 0 10px;
    cursor: pointer;


`

export const ProductQtText = styled.div`

    font-size: 25px;
    font-weight: bold;
    color: #fff;

`

export const ProductPrice = styled.div`

    font-size: 30px;
    font-weight: bold;
    color: #136713;

`

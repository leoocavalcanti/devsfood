import styled from "styled-components";

export const CartArea = styled.div`

    background-color: #136713;
    border-radius: 10px 10px 0 0px;
    position: fixed;
    bottom: 0;
    width: 312px;
    right: 30px;
    box-shadow: 0 0 5px #222;

`

export const CartHeader = styled.div`

    width: 290px;
    height: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;

`

export const CartIcon = styled.img`

    width: 23px;
    height: auto;
    margin: 0 10px;

`


export const CartText = styled.div`

    color: #fff;
    font-size: 17px;
    flex: 1;

    span{

        color: #E51C24;
        font-weight: bold;
        
    }

`

export const CartBody = styled.div(({show}) => (

    `

    height: ${show ? "360px" : "0px"};
    transition: all ease 0.3s;
    color: #fff;

    `

))

export const CartDown = styled.img(({show}) => (


    `

    width: 23px;
    height: auto;
    margin: 0 10px;
    transform: ${!show ? "rotate(180deg)" : "rotate(0deg)"};
    transition: 0.4s;
    
    `


))

export const ProductsArea = styled.div`



`

export const ProductItem = styled.div`

    display: flex;
    margin: 10px;

`

export const ProductPhoto = styled.img`

    width: 64px;
    height: auto;
    border-radius: 10px;

`

export const ProductInfoArea = styled.div`

    flex: 1;
    margin-left: 10px;

`

export const ProductName = styled.div`

    font-size: 15px;
    font-weight: bold;

`

export const ProductPrice = styled.div`

    font-size: 13px;

`

export const ProductQuantityArea = styled.div`

    display: flex;
    align-items: center;
    margin-top: -20px;
    margin-left: 15px;


`

export const ProductQtIcon = styled.img`

    width: 13px;
    height: auto;
    cursor: pointer;

`

export const ProductQtText = styled.div`

    font-size: 13px;
    font-weight: bold;
    margin: 0 5px;
`

export const Purchase = styled.div`

    display: flex;
    justify-content: space-between;
    margin: 20px 10px;

    span{

        font-size: 13px;
        
    }

    p{

        margin-top: -4px;
        font-size: 16px;
        font-weight: 700;
    }

    a{

        text-decoration: none;
        background: #1B98E0;
        color: #fff;
        border-radius: 5px;
        padding: 5px 8px;
        box-shadow: 0 0 2px #22222280;
        margin-top: 10px;
        font-size: 15px;
        transition: 0.3s;

        &:hover{

            background: #1C88E0;
        }
    }
    
    strong{

        font-size: 12px;
        font-weight: normal;
    }

`

export const TotalItems = styled.div`

    display: flex;
    flex-direction: column;
    margin-top: 4px;


`

export const PriceArea = styled.div`


`

export const SubTotal = styled.div`




`

export const TotalPrice = styled.div`



`
import React from 'react'
import * as C from "./styles"
import minusImage from "../../assets/minus.png"
import plusImage from "../../assets/plus.png"
import { useDispatch } from 'react-redux'

const ModalProduct = ({data, setStatus, qt, setQt}) => {

    const dispatch = useDispatch();

    const handleCancelButton = () => {

        setStatus(false);
        setQt(1);
    }

    const handleMinusQt = () => {

        if(qt >= 2){

            setQt(qt - 1);
        }
    }

    const handlePlusQt = () => {

        setQt(qt + 1);
    }

    const handleAddToCart = () => {

        dispatch({

            type: "ADD_PRODUCT",
            payload: {data, qt}
            
        })

        setStatus(false);
        setQt(1);
    }

  return (
    <C.Container>
        <C.ProductArea>
            <C.ProductPhoto src={data.image}/>
            <C.ProductInfoArea>
                <C.ProductDetails>
                    <C.ProductName>{data.name}</C.ProductName>
                    <C.ProductIngredients>Ingredientes: {data.ingredients ? data.ingredients : "morango, leite"}</C.ProductIngredients>
                </C.ProductDetails>
                <C.ProductQuantityArea>
                    <C.ProductQuantity>
                        <C.ProductQtImage onClick={handleMinusQt} src={minusImage}/>
                        <C.ProductQtText>{qt}</C.ProductQtText>
                        <C.ProductQtImage onClick={handlePlusQt} src={plusImage}/>
                    </C.ProductQuantity>
                    <C.ProductPrice>
                        R$ {(data.price * qt).toFixed(2)}
                    </C.ProductPrice>
                </C.ProductQuantityArea>
            </C.ProductInfoArea>
        </C.ProductArea>
        <C.ProductButtons>
            <C.ProductButton onClick={handleCancelButton} small={true}>Cancelar</C.ProductButton>
            <C.ProductButton onClick={handleAddToCart}>Adicionar ao carrinho</C.ProductButton>
        </C.ProductButtons>
    </C.Container>
  )
}

export default ModalProduct
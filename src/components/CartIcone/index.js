import React from "react"
import * as C from "./styles"
import cartImage from "../../assets/cart.png"
import { useSelector } from "react-redux"
import downImage from "../../assets/down.png"
import minusImage from "../../assets/minus.png"
import plusImage from "../../assets/plus.png"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

const CartIcone = () => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.products);

  const [show, setShow] = React.useState(false);
  const [items, setItems] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  const handleCartClick = () => {

    setShow(!show);

  }

  const handleProductChange = (key, type) => {

      dispatch({

        type: "CHANGE_PRODUCT",
        payload: {

          key, type
        }
      })

  }

  React.useEffect(() => {

  let total = 0;
  let price = 0;

  for(let i in products){

    
    total += products[i].qt;
    price += products[i].price * products[i].qt;
  
  }

  setTotalPrice(price);
  setItems(total);

  }, [products]);

  return (
    <C.CartArea>

        <C.CartHeader onClick={handleCartClick}>
            <C.CartIcon src={cartImage}/>
            <C.CartText>Meu carrinho ({products.length})</C.CartText>
            <C.CartDown show={show} src={downImage}/>
        </C.CartHeader>

        <C.CartBody show={show}>
        
          <C.ProductsArea>
              {products.map((item, index) => (

                <C.ProductItem key={index}>

                <C.ProductPhoto src={item.image}/>
                <C.ProductInfoArea> 
                    <C.ProductName>{item.name}</C.ProductName>
                    <C.ProductPrice>R$ {item.price.toFixed(2)}</C.ProductPrice>
                </C.ProductInfoArea>
                <C.ProductQuantityArea>
                    <C.ProductQtIcon onClick={() => handleProductChange(index, "-")} src={minusImage}/>
                    <C.ProductQtText>{item.qt}</C.ProductQtText>
                    <C.ProductQtIcon onClick={() => handleProductChange(index, "+")} src={plusImage}/>
                </C.ProductQuantityArea>
                </C.ProductItem>

              ))}
              
              <C.Purchase>
                <C.TotalItems>
                  <span>Quantidade</span>
                  <p>{items} itens</p>

                  {products.length > 0 && <Link to="/orders" onClick={() => setShow(false)}>Finalizar compra</Link>}
                  </C.TotalItems>
                <C.PriceArea>
                  <C.SubTotal>
                    <span>Subtotal</span>
                    <p>R$ {totalPrice.toFixed(2)}</p>
                  </C.SubTotal>
                  <span>Total <strong>(5% desconto)</strong></span>
                  <C.TotalPrice><p>R$ {(totalPrice * 0.95).toFixed(2)}</p></C.TotalPrice>
                </C.PriceArea>
              </C.Purchase>
            
          </C.ProductsArea>

        </C.CartBody>

    </C.CartArea>
  )
}

export default CartIcone


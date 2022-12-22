import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import HeaderLogo from '../../components/HeaderLogo';
import LoadingArea from '../../components/LoadingArea';
import Payment from '../../components/Payment';
import * as C from "./styles";

const Orders = () => {

  const dispatch = useDispatch();
  const products = useSelector(state => state.cart.products);

  const dateNow = new Date();
  const day = dateNow.getDate();
  const month = dateNow.getMonth();
  const year = dateNow.getFullYear();

  const [valorTotal, setValorTotal] = React.useState(0);

  React.useEffect(() => {

    let total = 0;

    for(let i in products){

      total += products[i].price * products[i].qt;

    }

    setValorTotal(total);

  }, [products])

  return (
    <C.Container>
  
      <HeaderLogo/>
      {products.length > 0 &&
        
        <C.RequestArea>
          <C.Wrapper>
            <LoadingArea/>
          <C.Situation>
            <C.Text>Pedido recebido</C.Text>
            <C.Text>Pedido em prepração</C.Text>
            <C.Text>Pedido entregue</C.Text>
          </C.Situation>
          <C.Div>
            <C.Am>
            {products.map((item, index) => (

              <C.Requests key={index}>
              <C.ControlArea>
              <C.RequestPhoto src={item.image}/>
              <C.RequestInfo>
                <C.RequestTitle>{item.name}</C.RequestTitle>
                <C.RequestPrice>R$ {(item.price * item.qt).toFixed(2)} <span>({item.qt} {item.qt > 1 ? "itens" : "item"})</span></C.RequestPrice>
              </C.RequestInfo>
              </C.ControlArea>
              </C.Requests>

            ))}
            </C.Am>


              <C.Address>
                <C.Date>
                  Data de entrega
                  <span>{`${day}/${month+1}/${year}`}</span>
                </C.Date>
                <C.Endereco>
                  Endereço de entrega
                  <span className="house">Minha casa</span>
                  Rua das Flores, 321 - (Recife)
                  <span>CEP: 51301-120</span>
                </C.Endereco>
              </C.Address>

            <C.CostArea>
              <span>Subtotal <strong>R$ {valorTotal.toFixed(2)}</strong></span>
              <span>Taxa de entrega <strong>Grátis</strong></span>
              <span>Desconto <strong className="off">- R$ {(valorTotal * 0.05).toFixed(2)}</strong></span>
              <span>Total <strong>R$ {(valorTotal * 0.95).toFixed(2)}</strong></span>
            </C.CostArea>

 
          </C.Div>
          <Payment/>
          </C.Wrapper>

        </C.RequestArea>
      }
      {products.length <= 0 && 
      
        <C.AlertArea>
          <C.Box>
          <span>Adicione itens ao carrinho para gerenciar seus pedidos</span>
          
          <Link to="/">Adicionar itens</Link>
          </C.Box>
        </C.AlertArea>
        
      }

    </C.Container>
  )
}

export default Orders
import React from 'react'
import * as C from "./styles"

const Payment = () => {
  return (
    <C.Container>
        
<div className="checkout-panel">
  <div className="panel-body">

    <h2 className="title">Finalizar pagamento</h2>
 
    <div className="payment-method">
      <label htmlFor="card" className="method card">
        <div className="card-logos">
          <img src="https://designmodo.com/demo/checkout-panel/img/visa_logo.png"/>
          <img src="https://designmodo.com/demo/checkout-panel/img/mastercard_logo.png"/>
        </div>
 
        <div className="radio-input">
          <input id="card" type="radio" name="payment"/>
          Pagar com cartão de crédito/débito
        </div>
      </label>
 
      <label htmlFor="paypal" className="method paypal">
        <img src="https://designmodo.com/demo/checkout-panel/img/paypal_logo.png"/>
        <div className="radio-input">
          <input id="paypal" type="radio" name="payment"/>
          Pagar com PayPal
        </div>
      </label>
    </div>
 
    <div className="input-fields">
      <div className="column-1">
        <label htmlFor="cardholder">Nome</label>
        <input type="text" id="cardholder" />
 
        <div className="small-inputs">
          <div>
            <label htmlFor="date">Data de vencimento</label>
            <input type="text" id="date"/>
          </div>
 
          <div>
            <label htmlFor="verification">CVV / CVC *</label>
            <input type="password" id="verification"/>
          </div>
        </div>
 
      </div>
      <div className="column-2">
        <label htmlFor="cardnumber">Número do cartão</label>
        <input type="password" id="cardnumber"/>
 
        <span className="info">* CVV ou CVC são os três números que estão localizados atrás do seu cartão.</span>
      </div>
    </div>
  </div>
 
  <div className="panel-footer">
    <button className="btn back-btn">Voltar</button>
    <button className="btn next-btn">Próximo passo</button>
  </div>
</div>

    </C.Container>
  )
}

export default Payment
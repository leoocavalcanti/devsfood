import React from 'react'
import * as C from "./styles"

const Modal = ({children, status, setStatus, qt, setQt}) => {

    const closeModal = (e) => {

        if(e.target === e.currentTarget){

            setStatus(false);
            setQt(1);
        }
    }

  return (
    <C.Container status={status} onClick={closeModal}>
        <C.ModalBody>
            {children}
        </C.ModalBody>
    </C.Container>
  )
}

export default Modal
import React from 'react'
import { Navigate } from 'react-router-dom'
import { isLogged } from '../../Context/UserStorage'

const ProtectedRoute = ({children}) => {

  const login = isLogged();

  return login ? children : <Navigate to="/profile"/>
}

export default ProtectedRoute
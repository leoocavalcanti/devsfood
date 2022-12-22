import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from '../components/ProtectedRoute'
import HomeScreen from './HomeScreen'
import Orders from './Orders'
import Profile from './Profile'
import Register from './Register'

const Pages = () => {
  return (
    <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/orders" element={<ProtectedRoute><Orders/></ProtectedRoute>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/register" element={<Register/>}/>
    </Routes>
  )
}

export default Pages
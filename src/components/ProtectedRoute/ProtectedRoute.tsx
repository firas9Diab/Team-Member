import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  if (!token) {
  navigate('/')
  }
  
  return children
}

export default ProtectedRoute
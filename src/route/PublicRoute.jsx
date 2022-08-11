import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({ isLogged, children }) => {
  if (isLogged === true) {
    return <Navigate to='/' replace />
  }

  return children
}

export default PublicRoute

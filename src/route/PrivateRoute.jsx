import React from 'react'
import { Navigate } from 'react-router-dom'
const PrivateRoute = ({ isLogged, children }) => {
  if (isLogged === false) {
    return <Navigate to='/login' replace />
  }

  return children
}

export default PrivateRoute

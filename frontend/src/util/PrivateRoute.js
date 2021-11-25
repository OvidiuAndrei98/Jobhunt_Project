import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import AuthService from '../service/AuthService'

const PrivateRoute = ({ component: Component, ...rest }) => {

  const isLoggedIn = AuthService.getCurrentUser()

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component/>
        ) : (
          <Redirect to={{ pathname: '/login'}} />
        )
      }
    />
  )
}

export default PrivateRoute
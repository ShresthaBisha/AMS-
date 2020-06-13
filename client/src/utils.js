import { get } from 'lodash'
import { Redirect, Route } from 'react-router-dom'
import React from 'react'

const getArr = (obj, ltr) => get(obj, ltr) || []

const getAccessToken = () => {
    const storedUser = localStorage.getItem('user')
    if (!storedUser) return null

    const user = JSON.parse(storedUser)
    return user.token
}

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                !!getAccessToken() ? <Component {...props} /> : <Redirect to="/login"/>
            }
        />
    )
}

export {
    getArr, getAccessToken, PrivateRoute
}

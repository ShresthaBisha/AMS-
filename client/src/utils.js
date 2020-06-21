import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { get, flatten, uniq } from 'lodash'
import permissons from './permissons.json'

const getArr = (obj, ltr) => get(obj, ltr) || []

const getUser = () => {
    const storedUser = localStorage.getItem('user')
    if (!storedUser) return null

    return JSON.parse(storedUser)
}


const getAccessToken = () => get(getUser(), 'token')

const getGroups = () => getArr(getUser(), 'groups')

const getPermissions = (group = get(getGroups(), '0')) => {
    return get(permissons, group)
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
    getArr, getAccessToken, PrivateRoute, getGroups, getPermissions, getUser
}

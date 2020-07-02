import React, { Component } from 'react'
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
    if(!!getAccessToken()) return <Redirect to='/login' />
    return (
         <Route
            {...rest}
            render={(props) =>
                !!getAccessToken() ? <Component {...props} /> : <Redirect to="/login"/>
            }

            // render ={(props) => {
            //
            //     // console.log('log access tokent', !!getAccessToken());
            //
            //     return <Redirect to="/login"/>
            // }
            // }
        />
    )
}

// This component can be extracted to a separate file later in the development process

class ProtectedComponents extends Component {

    render () {
        // If the user is not already logged in redirect him to the /login
        // For now I'm using getAccessToken() to check if the user is authenticated or not.
        return !!getAccessToken() ? this.props.children : <Redirect to="/login"/>
    }
}

export {
    getArr, getAccessToken, PrivateRoute, getGroups, getPermissions, getUser, ProtectedComponents
}

import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './Login/components/Login'
import { getAccessToken } from './utils'

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => (
                !!getAccessToken() ? <Component {...props} /> : <Redirect to='/login' />
            )}
        />
    )
}

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from='/' to='/login' />
                <Route path='/login' component={Login} exact />
                {/*<PrivateRoute path='/sales' component={Sales} exact/>*/}
            </Switch>
        </BrowserRouter>
    )
}

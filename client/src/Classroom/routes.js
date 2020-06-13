import React  from 'react'
import { Redirect, Switch } from 'react-router-dom'
import { PrivateRoute } from '../utils'

import CreateClassrooms from './components/CreateClassroom'
import ListClassrooms from './components/ListClassroom'

const routes = () => {
    return (
        <Switch>
            <PrivateRoute path="/class-room/create" component={CreateClassrooms} exact/>
            <PrivateRoute path="/class-room/list" component={ListClassrooms} exact/>
            <Redirect from='/class-room' to='/class-room/list' exact/>
        </Switch>
    )
}

export default routes

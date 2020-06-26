import React from 'react'
import { Redirect, Switch } from 'react-router-dom'
import { PrivateRoute } from '../utils'

import ListStudents from './components/ListStudents'
import AddStudents from './components/AddStudents'

const routes = () => {
    return (
        <Switch>
            <PrivateRoute path="/student/list" component={ListStudents} exact/>
            <PrivateRoute path="/student/create" component={AddStudents} exact/>
            <Redirect from='/student' to='/student/list' exact/>
        </Switch>
    )
}

export default routes

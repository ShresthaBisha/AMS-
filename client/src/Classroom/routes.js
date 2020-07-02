import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import CreateClassrooms from './components/CreateClassroom'
import ListClassrooms from './components/ListClassroom'

const routes = () => {
    return (
        <Switch>
            <Route path="/class-room/create" component={CreateClassrooms} exact/>
            <Route path="/class-room/list" component={ListClassrooms} exact/>
            <Redirect from='/class-room' to='/class-room/list' exact/>
        </Switch>
    )
}

export default routes

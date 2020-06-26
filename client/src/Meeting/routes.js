import React  from 'react'
import { Redirect, Switch } from 'react-router-dom'
import { PrivateRoute } from '../utils'

import CreateMeetings from './components/CreateMeetings'
import ListMeetings from './components/ListMeetings'

const routes = () => {
    return (
        <Switch>
            <PrivateRoute path="/meeting/create" component={CreateMeetings} exact/>
            <PrivateRoute path="/meeting/list" component={ListMeetings} exact/>
            <Redirect from='/meeting' to='/meeting/list' exact/>
        </Switch>
    )
}

export default routes

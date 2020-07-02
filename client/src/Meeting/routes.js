import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import CreateMeetings from './components/CreateMeetings'
import ListMeetings from './components/ListMeetings'

const routes = () => {
    return (
        <Switch>
            <Route path="/meeting/create" component={CreateMeetings} exact/>
            <Route path="/meeting/list" component={ListMeetings} exact/>
            <Redirect from='/meeting' to='/meeting/list' exact/>
        </Switch>
    )
}

export default routes

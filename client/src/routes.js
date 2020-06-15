import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Login from './Login/components/Login'

import ClassroomRoutes from './Classroom/routes'
import MeetingRoutes from './Meeting/routes'
import StudentRoutes from './Student/routes'

import MainMenu from './NavBar/components/MainMenu'
import SubMenu from './NavBar/components/SubMenu'
import Footer from './NavBar/components/Footer'

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/class-room"/>
                <Route path="/login" component={Login} exact/>

                <div>
                    <MainMenu/>
                    <SubMenu/>

                    <ClassroomRoutes/>
                    <MeetingRoutes/>
                    <StudentRoutes/>

                    <Footer />
                </div>
            </Switch>
        </BrowserRouter>
    )
}

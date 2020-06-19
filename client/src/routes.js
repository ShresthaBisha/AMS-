import React, { useEffect } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAccessToken, getUser } from './utils'

import { setUser } from './Login/actions'

import ClassroomRoutes from './Classroom/routes'
import MeetingRoutes from './Meeting/routes'
import StudentRoutes from './Student/routes'
import Login from './Login/components/Login'

import MainMenu from './NavBar/components/MainMenu'
import SubMenu from './NavBar/components/SubMenu'
import Footer from './NavBar/components/Footer'
import { divide } from 'lodash'

const Routes = ({ dispatch }) => {
    useEffect(() => {
        if (getAccessToken()) {
            const user = getUser()
            dispatch(setUser(user))
        }
    }, [])

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

                    <Footer/>
                </div>
            </Switch>
        </BrowserRouter>
    )
}

export default connect(() => ({}))(Routes)

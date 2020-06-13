import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./Login/components/Login";
import Books from "./Books/components/Books";
import Students from "./Students/components/Students";
import Employee from "./Students/components/Employee";
import CreateClassrooms from "./Classroom/components/CreateClassroom";
import ListClassrooms from "./Classroom/components/ListClassroom";
import CreateMeetings from "./Meeting/components/CreateMeetings";
import ListMeetings from "./Meeting/components/ListMeetings";
import AddStudents from "./Students/components/AddStudents";
import ListStudents from "./Students/components/ListStudents";

import { getAccessToken } from "./utils";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !!getAccessToken() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/class-room/list" />
        <Route path="/login" component={Login} exact />
        {/*<Route path="/books" component={Books} exact />*/}
        {/*<Route path="/users/students" component={Students} exact />*/}
        {/*<Route path="/users/employee" component={Employee} exact />*/}

        <PrivateRoute path="/class-room/create" component={CreateClassrooms} exact />
        <PrivateRoute path="/class-room/list" component={ListClassrooms} exact />
        <PrivateRoute path="/students/create" component={AddStudents} exact />
        <PrivateRoute path="/students/list" component={ListStudents} exact />
        <PrivateRoute path="/meeting/create" component={CreateMeetings} exact />
        <PrivateRoute path="/meeting/list" component={ListMeetings} exact />
      </Switch>
    </BrowserRouter>
  );
};

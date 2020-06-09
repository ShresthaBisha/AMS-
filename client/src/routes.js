import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./Login/components/Login";
import Books from "./Books/components/Books";
import Students from "./Students/components/Students";
import Employee from "./Students/components/Employee";
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
        <Redirect exact from="/" to="/login" />
        <Route path="/users/login" component={Login} exact />
        <Route path="/books" component={Books} exact />
        <Route path="/users/students" component={Students} exact />
        <Route path="/users/employee" component={Employee} exact />
        {/* <PrivateRoute path="/sales" component={Sales} exact /> */}
      </Switch>
    </BrowserRouter>
  );
};

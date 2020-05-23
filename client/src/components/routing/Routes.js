import React from "react";
import { Route, Switch } from "react-router-dom";
import Alert from "../layout/Alert";
import Login from "../auth/Login";
import Register from "../auth/Register";
//import NotFound from "../layout/Navbar";
import Dashboard from "../dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ProfileForm from "../profile-forms/ProfileForm";
import Profiles from "../profiles/Profiles";

const Routes = (props) => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={ProfileForm} />
        <PrivateRoute exact path="/edit-profile" component={ProfileForm} />
      </Switch>
    </section>
  );
};

export default Routes;

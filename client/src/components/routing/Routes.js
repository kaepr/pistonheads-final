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
import Profile from "../profile/Profile";
import Posts from "../posts/Posts";
import Post from "../post/Post";

const Routes = (props) => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/create-profile" component={ProfileForm} />
        <PrivateRoute exact path="/edit-profile" component={ProfileForm} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/posts/:id" component={Post} />
      </Switch>
    </section>
  );
};

export default Routes;

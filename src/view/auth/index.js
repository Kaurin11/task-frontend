import React from "react";
import { Redirect, Route, Switch } from "react-router";
import {
  getHomeUrl,
  getLoginUrl,
  getRegistUrl,
} from "../../constants/routes/routes";
import home from "./home/home";
import Login from "./login/login";
import Registration from "./registration/registration";

const Auth = () => {
  return (
    <div>
      <Switch>
        <Route path={getHomeUrl()} component={home} />
        <Route path={getLoginUrl()} component={Login} />
        <Route path={getRegistUrl()} component={Registration} />
        <Redirect to={getHomeUrl()} />
      </Switch>
    </div>
  );
};

export default Auth;

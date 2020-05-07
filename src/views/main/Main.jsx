import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";

import {Dashboard} from "../dashboard/Dashboard";
import {Front} from "../front/Front";
import {NoMatch} from "../nomatch/NoMatch";

export const Main = props => (
  <main>
    <Switch>
      <Route exact path="/404" component={NoMatch} />

      <Route exact path="/" component={Front} />
      <Route path="/dashboard" component={Dashboard} />

      <Redirect to="/404" />
    </Switch>
  </main>
);

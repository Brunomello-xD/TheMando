import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Cases from "./pages/Cases";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/cases" component={Cases}></Route>
      </Switch>
    </BrowserRouter>
  );
}

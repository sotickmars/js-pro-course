import React, { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { Users } from "./Users";
import { BrowserRouter } from "react-router-dom";
import { Link, Route, Switch, Redirect } from "react-router-dom";

export const App = () => {
  const [app, setapp] = useState(0);
  return (
    <>
      <div>Вывожу текст внутри App</div>
      <BrowserRouter>
        <Switch>
          <Route component={Register} path="/register" />
          <Route component={Login} path="/login" />
          <Route component={Users} path="/login" />
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

import React from "react";
import { Header } from "./Header";
import { Home } from "./Home";
import { Users } from "./Users.jsx";
import { SideMenu } from "./SideMenu.jsx";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

export const Main = ({ user, addUsers, users }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          render={() => <Users user={user} users={users} addUsers={addUsers} />}
          path="/main/users"
        />
        <Route
          render={() => (
            <>
              <Header user={user} />
              <Home />
              <SideMenu user={user} />
            </>
          )}
          path="/main"
        />
      </Switch>
    </BrowserRouter>
  );
};

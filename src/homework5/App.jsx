import React, { useState, useEffect } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { Main } from "./Main";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router-dom";

export const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();
  const addUsers = () => {
    setUsers([...users, user]);
  };

  const onLogout = () => setUser(null);

  useEffect(() => {
    const getData = async () => {
      const responce = await fetch("http://localhost:3004/users");
      const data = await responce.json();
      setUsers(data);
    };
    getData();
  }, []);

  const checkUser = (user) => {
    const userIs = users.find((next) => {
      return next.login === user.login && next.pass === user.pass;
    });
    if (userIs) {
      setUser(userIs);
      return true;
    } else {
      alert("Error");
    }
  };

  return (
    <>
      <div>Вывожу текст внутри App</div>
      <BrowserRouter>
        <Switch>
          <Route component={Register} path="/register" />
          <Route
            render={() => <Login checkUser={checkUser}></Login>}
            path="/login"
          />
          <Route
            render={() => (
              <Main user={user} addUsers={addUsers} users={users} />
            )}
            user={user}
            onLogout={onLogout}
            users={users}
            path="/main"
          />
          {!user && <Redirect to="/login" />}
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

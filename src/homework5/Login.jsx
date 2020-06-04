import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";

export const Login = ({ checkUser, user }) => {
  const [login, setLogin] = useState();
  const [pass, setPass] = useState();

  return (
    <div>
      <div>
        <input
          onChange={(event) => setLogin(event.target.value)}
          value={login}
          type="text"
        />
        <label htmlFor="">Login</label>
      </div>
      <div>
        <input
          onChange={(event) => setPass(event.target.value)}
          value={pass}
          type="password"
        />
        <label htmlFor="">Password</label>
      </div>
      <button onClick={() => checkUser({ login, pass })}>
        <Link to="/home">Войти</Link>
      </button>
      <button>
        <Link to="/register">Зарегестрироваться</Link>
      </button>
    </div>
  );
};

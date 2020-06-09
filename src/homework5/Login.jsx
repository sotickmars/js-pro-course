import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

export const Login = ({ checkUser }) => {
  const [login, setLogin] = useState();
  const [pass, setPass] = useState();
  const history = useHistory();

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
      <button
        onClick={() =>
          checkUser({ login, pass }) && checkUser({ login, pass }) === true
            ? history.push("/main")
            : history.push("/login")
        }
      >
        Войти
      </button>
      <button>
        <Link to="/register">Зарегестрироваться</Link>
      </button>
    </div>
  );
};

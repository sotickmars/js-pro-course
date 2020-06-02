import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";

export const Login = () => {
  const [login, setLogin] = useState();
  return (
    <>
      <form action="">
        <div>
          <input type="text" />
          <button>Войти</button>
        </div>
        <div>
          <input type="text" />
          <button>
            <Link to="/register">Зарегестрироваться</Link>
          </button>
        </div>
      </form>
    </>
  );
};

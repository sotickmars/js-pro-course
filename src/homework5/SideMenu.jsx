import React from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";

export const SideMenu = ({ user }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/main/users" user={user}>
            Пользователи
          </Link>
        </li>
        <li>
          <Link to="/main">Главная</Link>
        </li>
        <li>
          <button>Выход</button>
        </li>
      </ul>
    </nav>
  );
};

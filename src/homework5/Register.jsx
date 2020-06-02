import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";

export const Register = () => {
  return (
    <>
      <form action="">
        <div>
          <input type="text" />
          <label htmlFor="">Логин</label>
        </div>
        <div>
          <input type="password" />
          <label htmlFor="">Пароль</label>
        </div>
        <div>
          <input type="text" />
          <label htmlFor="">Имя</label>
        </div>
        <div>
          <input type="date" />
          <label htmlFor="">Дата Рождения</label>
        </div>
        <div>
          <button>Зарегестрироваться</button>
          <button>
            <Link to="/login">Выйти</Link>
          </button>
        </div>
      </form>
    </>
  );
};

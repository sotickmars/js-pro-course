import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";

export const Register = () => {
  const [userLogin, setUSerLogin] = useState();
  const [userPass, setUSerPass] = useState();
  const [userName, setUSerName] = useState();
  const [userDate, setUSerDate] = useState();

  return (
    <>
      <form action="">
        <div>
          <input
            type="text"
            value={userLogin}
            onChange={(evt) => setUSerLogin(evt.target.value)}
          />
          <label htmlFor="">Логин</label>
        </div>
        <div>
          <input
            type="password"
            value={userPass}
            onChange={(evt) => setUSerPass(evt.target.value)}
          />
          <label htmlFor="">Пароль</label>
        </div>
        <div>
          <input
            type="text"
            value={userName}
            onChange={(evt) => setUSerName(evt.target.value)}
          />
          <label htmlFor="">Имя</label>
        </div>
        <div>
          <input
            type="date"
            value={userDate}
            onChange={(evt) => setUSerDate(evt.target.value)}
          />
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

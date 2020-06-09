import React from "react";
import { Link } from "react-router-dom";

export const Users = ({ users, addUsers }) => {
  return (
    <>
      <ul>
        {users.map((users, i) => {
          return (
            <li key={users.id}>
              Login: {users.login}
              <br />
              Other: {users.other}
            </li>
          );
        })}
      </ul>
      <button onClick={() => addUsers()}>+</button>
      <button>
        <Link to="/main">Go To MAIN</Link>
      </button>
    </>
  );
};

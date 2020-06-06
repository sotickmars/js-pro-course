import React, { useState } from "react";

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
    </>
  );
};

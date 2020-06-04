import React, { useState } from "react";

export const Users = ({ users }) => {
  return (
    <ul>
      {users.map((users, i) => {
        return (
          <li key={users.id}>
            Login: {users.login}
            Other: {users.other}
          </li>
        );
      })}
    </ul>
  );
};

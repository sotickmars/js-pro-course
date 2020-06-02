import React, { useState } from "react";

export const Users = () => {
  const [users, setusers] = useState([
    {
      login: "Simaka",
      pass: "",
      name: "",
      date: "",
    },
  ]);
  return (
    <>
      <ul>
        <li>{users.login}</li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </>
  );
};

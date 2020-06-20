import React, { useState } from "react";

export const Login = () => {
  const [inputLog, setInputLog] = useState();
  const [inputPass, setInputPass] = useState();
  return (
    <div>
      <input
        value={inputLog}
        onChange={(evt) => setInputLog(evt.target.value)}
        type="text"
      />
      <label htmlFor="">Login</label>
      <br />
      <input
        onChange={(evt) => setInputPass(evt.target.value)}
        value={inputPass}
        type="password"
      />
      <label htmlFor="">Password</label>
      <br />
      <button>Submit</button>
      <button>Register</button>
      <br />
      <button>CONCOLE</button>
    </div>
  );
};

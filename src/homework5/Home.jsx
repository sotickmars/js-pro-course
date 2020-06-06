import React from "react";
import { Link } from "react-router-dom";

export const Home = ({ user }) => {
  return (
    <>
      <div>This is HOME page {user.login}</div>
      <button>
        <Link to="/main">Go to MAIN</Link>
      </button>
    </>
  );
};

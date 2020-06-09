import React from "react";
import { Link } from "react-router-dom";

export const SideMenu = ({ user }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/main/users" user={user}>
            Users
          </Link>
        </li>
        <li>
          <Link to="/main/home">Home</Link>
        </li>
        <li>
          <button>
            <Link to="/login">Exit</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};

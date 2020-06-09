import React from "react";

export const Header = ({ user }) => {
  return (
    <div>
      Name:{user.login} Other:{user.other}
    </div>
  );
};

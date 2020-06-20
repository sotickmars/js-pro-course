import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Login } from "./Login";

const Content = ({ addUsers }) => {
  useEffect(() => {
    const getData = async () => {
      const responce = await fetch("http://localhost:3004/users");
      const data = await responce.json();
      addUsers(data);
    };
    getData();
  }, []);

  return <Login />;
};

const mapDispatchToProps = (dispatch) => ({
  addUsers: (data) => {
    dispatch({ type: "ADD", data });
  },
});

export const ContentComponent = connect(null, mapDispatchToProps)(Content);

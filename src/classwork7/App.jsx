import React from "react";
import { Second } from "./Second";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const App = () => {
  return (
    <Provider store={store}>
      <Second />
    </Provider>
  );
};

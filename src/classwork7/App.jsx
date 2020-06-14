import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Second } from "./Second/index";
import { First } from "./First/index";

export const App = () => {
  console.log(store);
  return (
    <Provider store={store}>
      <Second />
      <br />
      <First />
    </Provider>
  );
};

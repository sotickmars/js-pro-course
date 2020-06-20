import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ContentComponent } from "./components/indexUsers";

export const App = () => {
  return (
    <Provider store={store}>
      <ContentComponent />
    </Provider>
  );
};

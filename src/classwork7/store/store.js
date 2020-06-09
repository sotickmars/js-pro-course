import { createStore } from "redux";
import { counter } from "./reducers/content";

export const store = createStore(counter);

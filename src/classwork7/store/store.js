import { createStore } from "redux";
import { rootReducer } from "../Second/combine";
import { devToolsEnhancer } from "redux-devtools-extension";

export const store = createStore(rootReducer, devToolsEnhancer());

import { combineReducers, createStore } from "redux";
import { appReducer } from "./redux/app.reducer";
import { sideReducer } from "./redux/sidebar.reducer";

const rootReducers = combineReducers({
  app: appReducer,
  sidebar: sideReducer
});

export const store = createStore(rootReducers);
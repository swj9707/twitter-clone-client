import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../Slices/AuthReducer";

const rootReducer = combineReducers({
  AuthReducer,
});

const store = configureStore({ reducer: rootReducer });
export default store;
export type RootStore = ReturnType<typeof rootReducer>;

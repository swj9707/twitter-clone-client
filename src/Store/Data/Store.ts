import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../Slices/AuthReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  AuthReducer,
});

const store = configureStore({ reducer: rootReducer, middleware: [thunk] });
export default store;
export type RootStore = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

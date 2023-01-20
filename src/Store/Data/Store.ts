import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../Slices/AuthReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  AuthReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export default store;
export type RootStore = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

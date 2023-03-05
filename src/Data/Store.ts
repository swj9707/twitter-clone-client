import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./Ducks/Auth/AuthReducer";
import UserInfoReducer from "./Ducks/User/UserInfoReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  AuthReducer,
  UserInfoReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["AuthReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export default store;
export type RootStore = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

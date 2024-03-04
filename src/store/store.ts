import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./user/UserReducer";
import MenuReducer from "./menus/MenuReducer";

export const store = configureStore({
  reducer: {
    users: UserReducer,
    menus: MenuReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

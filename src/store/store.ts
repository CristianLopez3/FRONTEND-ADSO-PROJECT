import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./user/UserReducer";
import MenuReducer from "./menus/MenuReducer";
import CategoryReducer from "./menus/CategoryReducer";

export const store = configureStore({
  reducer: {
    users: UserReducer,
    menus: MenuReducer,
    categories: CategoryReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

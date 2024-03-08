import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./user/UserReducer";
import {menuReducer} from "@/store/menus";
import CategoryReducer from "./menus/CategoryReducer";

export const store = configureStore({
  reducer: {
    users: UserReducer,
    menus: menuReducer,
    categories: CategoryReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

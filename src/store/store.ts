import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user";
import { menuReducer } from "@/store/menus";
import CategoryReducer from "./menus/CategoryReducer";
import { authReducer } from "./auth";
import { reservationReducer } from "./reservations";

export const store = configureStore({
  reducer: {
    users: userReducer,
    menus: menuReducer,
    categories: CategoryReducer,
    reservations: reservationReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

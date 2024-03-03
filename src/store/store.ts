import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./user/UserReducer";
import counterReducer from './user/TestReducer';
export const store = configureStore({
  reducer: {
    users: UserReducer,
    counter: counterReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

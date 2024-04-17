import { User } from "@/types/User";
import {
  countUsersAction,
  createUserAction,
  deleteUserAction,
  getAllUsersAction,
  updateUserAction,
} from "./userActions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserReducerState {
  isLoading: boolean;
  data: User[];
  count?: number | null;
  isError: boolean;
}

const initialState: UserReducerState = {
  isLoading: false,
  data: [],
  count: null,
  isError: false,
};

// Functios to manage the state of the reducer
const startLoading = (state: UserReducerState) => {
  state.isLoading = true;
  state.isError = false;
};

const loadingFailed = (state: UserReducerState) => {
  state.isLoading = false;
  state.isError = true;
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUserAction.pending, startLoading)
      .addCase(
        createUserAction.fulfilled,
        (state, action: PayloadAction<User[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(createUserAction.rejected, loadingFailed)
      .addCase(getAllUsersAction.pending, startLoading)
      .addCase(
        getAllUsersAction.fulfilled,
        (state, action: PayloadAction<User[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(getAllUsersAction.rejected, loadingFailed)
      .addCase(deleteUserAction.pending, startLoading)
      .addCase(
        deleteUserAction.fulfilled,
        (state, action: PayloadAction<number | string>) => {
          state.isLoading = false;
          state.data = state.data.filter((user) => user.id !== action.payload);
        }
      )
      .addCase(deleteUserAction.rejected, loadingFailed)
      .addCase(updateUserAction.pending, startLoading)
      .addCase(
        updateUserAction.fulfilled,
        (state, action: PayloadAction<User[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(updateUserAction.rejected, loadingFailed)
      /**
       * ADD COUNT USERS
       */
      .addCase(countUsersAction.pending, startLoading)
      .addCase(countUsersAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.count = action.payload;
      })
      .addCase(countUsersAction.rejected, loadingFailed);
  },
});

export default userSlice.reducer;

import { User } from "@/types/User";
import {
  createUserAction,
  deleteUserAction,
  getAllUsersAction,
  updateUserAction,
} from "./userActions";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserReducerState {
  isLoading: boolean;
  data: User[];
  isError: boolean;
}

const initialState: UserReducerState = {
  isLoading: false,
  data: [],
  isError: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // * Add the createUser reducer
      .addCase(createUserAction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        createUserAction.fulfilled,
        (state, action: PayloadAction<User[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(createUserAction.rejected, (state) => {
        state.isError = true;
      })
      // * Add the getAllUsers reducer
      .addCase(getAllUsersAction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        getAllUsersAction.fulfilled,
        (state, action: PayloadAction<User[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(getAllUsersAction.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      // * Add the deleteUser reducer
      .addCase(deleteUserAction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        deleteUserAction.fulfilled,
        (state, action: PayloadAction<number | string>) => {
          state.isLoading = false;
          state.data = state.data.filter((user) => user.id !== action.payload);
        }
      )
      .addCase(deleteUserAction.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      })
      // * add the updateUser reducer
      .addCase(updateUserAction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        updateUserAction.fulfilled,
        (state, action: PayloadAction<User[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(updateUserAction.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});
export default userSlice.reducer;

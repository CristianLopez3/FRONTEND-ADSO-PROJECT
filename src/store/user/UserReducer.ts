import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { users_service } from "@/api/users";
import { User } from "@/types/User";

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
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(createUser.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(createUser.rejected, (state) => {
        state.isError = true;
      })
      // * Add the getAllUsers reducer
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        getAllUsers.fulfilled,
        (state, action: PayloadAction<User[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(getAllUsers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      // * Add the deleteUser reducer
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        deleteUser.fulfilled,
        (state, action: PayloadAction<number | string>) => {
          state.isLoading = false;
          state.data = state.data.filter((user) => user.id !== action.payload);
        }
      )
      .addCase(deleteUser.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      })
      // * add the updateUser reducer
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(updateUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

const createUser = createAsyncThunk("user/createUser", async (user: User) => {
  const response = await users_service.add({ user });
  return response.data; // Assuming the response has a 'data' property containing the user data
});

const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
  const response = await users_service.getAll();
  return response.data;
});

const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (id: number | string) => {
    const response = await users_service.deleteUser({ id });
    return response.data;
  }
);

const updateUser = createAsyncThunk("user/updateUser", async (user: User) => {
  const response = await users_service.update({ user });
  return response.data;
});

export { createUser, getAllUsers, deleteUser, updateUser }; // Export the action creators for usage in components
export default userSlice.reducer;

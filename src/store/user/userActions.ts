import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserService,
  deleteUserService,
  getAllUsersService,
  updateUserService,
} from "./userService";

export const createUserAction = createAsyncThunk(
  "users/createUser",
  createUserService
);

export const getAllUsersAction = createAsyncThunk(
  "users/getAllUsers",
  getAllUsersService
);

export const deleteUserAction = createAsyncThunk(
  "users/deleteUser",
  deleteUserService
);

export const updateUserAction = createAsyncThunk(
  "users/updateUser",
  updateUserService
);

import { users_service } from "@/api/users";
import { User } from "@/types/User";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk("user/createUser", async (user: User) => {
  try {
    const response = await users_service.add({ user });
    return response.data; // Assuming the response has a 'data' property containing the user data
  } catch (error) {
    console.error("Error creating user: ", error);
    throw error;
  }
});

export const getAllUsers = createAsyncThunk("user/getAllUsers", async () => {
  try {
    const response = await users_service.getAll();
    return response.data; // Assuming the response has a 'data' property containing the user data
  } catch (error) {
    console.error("Error getting users: ", error);
    throw error;
  }
});
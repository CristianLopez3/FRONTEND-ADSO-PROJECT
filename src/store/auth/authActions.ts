import { createAsyncThunk } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";
import { instance } from "@/api/base.api";
import { AuthTypes } from "@/types/Auth";

// export const  loginAction = createAsyncThunk("auth/login", login);
export const loginAction = createAsyncThunk(
  "auth/login",
  async (authData: AuthTypes) => {
    try {
      const response = await instance.post("/auth/login", authData);
      const { accessToken } = response.data;

      // Decode the token to get the expiration time
      const decodedToken = jwtDecode(accessToken);
      const expirationTime = decodedToken.exp;

      // Store the token and expiration time in local storage
      localStorage.setItem("token", accessToken);
      localStorage.setItem("expirationTime", expirationTime!.toString());

      return { accessToken, expirationTime };
    } catch (error: unknown) {
    //   return thunkAPI.rejectWithValue(error.response?.data);
        throw new Error("Error in the login request");
    }
  }
);

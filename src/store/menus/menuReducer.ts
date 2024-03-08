import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuReducer } from "@/types/Menu";
import {
  getAllMenusAction,
  addMenuAction,
  updateMenuAction,
  deleteMenuAction,
  getMenusByCategoryAction,
} from "./menuActions";
import { Menu } from "@/types/Menu";

const initialState: MenuReducer = {
  isLoading: false,
  data: [],
  isError: false,
};

const menuSlice = createSlice({
  name: "menus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // * Add the getAllMenusAction reducer
      .addCase(getAllMenusAction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        getAllMenusAction.fulfilled,
        (state, action: PayloadAction<Menu[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(getAllMenusAction.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      // * Add the addMenu reducer
      .addCase(addMenuAction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        addMenuAction.fulfilled,
        (state, action: PayloadAction<Menu>) => {
          state.isLoading = false;
          state.data.push(action.payload);
        }
      )
      .addCase(addMenuAction.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      // * Add the updateMenu reducer
      .addCase(updateMenuAction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        updateMenuAction.fulfilled,
        (state, action: PayloadAction<Menu[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(updateMenuAction.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      // * Add the deleteMenu reducer
      .addCase(deleteMenuAction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        deleteMenuAction.fulfilled,
        (state, action: PayloadAction<Menu[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(deleteMenuAction.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      // * Add the getMenusByCategory reducer
      .addCase(getMenusByCategoryAction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        getMenusByCategoryAction.fulfilled,
        (state, action: PayloadAction<Menu[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(getMenusByCategoryAction.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default menuSlice.reducer;

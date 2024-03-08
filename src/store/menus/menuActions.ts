// menuActions.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMenus, getMenusByCategory, addMenu, updateMenu, deleteMenu } from "./menuService";

export const getAllMenusAction = createAsyncThunk("menus/getAllMenus", getMenus);

export const getMenusByCategoryAction = createAsyncThunk("menus/getMenusByCategory", getMenusByCategory);

export const addMenuAction = createAsyncThunk("menus/createMenu", addMenu);

export const updateMenuAction = createAsyncThunk("menus/update", updateMenu);

export const deleteMenuAction = createAsyncThunk("menus/delete", deleteMenu);
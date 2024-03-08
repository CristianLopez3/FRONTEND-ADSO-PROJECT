import { instance } from "./base.api";
import { MenuPost } from "@/types/Menu";

const endpoint = "menus";

export const menus_service = {
  getMenus: function () {
    return instance.get(endpoint);
  },

  getMenuById: function (id:  number | string ) {
    return instance.get(`${endpoint}/${id}`);
  },

  getMenusByCategory: function (id: number | string) {
    return instance.get(`${endpoint}/category/${id}`);
  },

  addMenu: function (menu: MenuPost) {
    return instance.post(endpoint, menu);
  },

  deleteMenu: function (id: number | string) {
    return instance.delete(`${endpoint}/${id}`);
  },

  updateMenu: function (menu: MenuPost) {
    return instance.put(`${endpoint}/${menu.id!}`, menu);
  },
};

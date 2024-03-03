import { instance } from "./base.api";
import { Menu } from "../types/Menu";

const endpoint = "menus";


export const users_service = {
  getMenus: function () {
    return instance.get(endpoint);
  },

  addMenu: function ({ menu }: {menu: Menu}) {
    return instance.post(endpoint, menu);
  },

  getMenuById: function({id}: {id: number | string}){
    return instance.get(`${endpoint}/${id}`)
  },

  deleteMenu: function({id}: {id: number | string}){
    return instance.delete(`${endpoint}/${id}`)
  },

  updateMenu: function ({ menu }: {menu: Menu}) {
    return instance.put(`${endpoint}/${menu.id!}`, menu);
  },
};

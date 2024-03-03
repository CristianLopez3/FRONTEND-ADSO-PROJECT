import { instance } from "./base.api";
import { User } from "../types/User";

const endpoint = "users";



export const users_service = {
  getAll: function () {
    return instance.get(endpoint);
  },

  add: function ({ user }: {user: User}) {
    return instance.post(endpoint, user);
  },

  getUserById: function({id}: {id: number | string}){
    return instance.get(`${endpoint}/${id}`)
  },

  deleteUser: function({id}: {id: number | string}){
    return instance.delete(`${endpoint}/${id}`)
  },

  update: function ({ user }: {user: User}) {
    return instance.put(`${endpoint}/${user.id!}`, user);
  },
};

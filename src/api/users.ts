import { instance } from "./base.api";
import { User } from "../types/User";

const endpoint = "users";

interface Post {
  user: User
}



export const users_service = {
  getAll: function () {
    return instance.get(endpoint);
  },

  add: function ({ user }: Post) {
    return instance.post(endpoint, user);
  },

  getUserById: function({id}: {id: number | string}){
    return instance.get(`${endpoint}/${id}`)
  }
};

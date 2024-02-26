import { User } from "../types/User";
import { instance } from "./base.api";

const endpoint = "users";

export const users_service = {
  getAll: function ({ page }: { page: number }) {
    return instance.get(endpoint, {
      params: {
        page,
      },
    });
  },
  
  add: function({user}: {user: User}){
    return instance.post(endpoint, user)
  }
};

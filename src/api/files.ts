
import { instance } from "./base.api";

const endpoint = "file";

export const filesService = {
  getImage: async function(url: string) {
    return await instance.get(`${endpoint}/${url}`);
  }
}
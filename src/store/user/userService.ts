import { usersService } from "@/api/users";
import { User } from "@/types/User";


export const getUsers = async () => {
  const response = await usersService.getAll();
  return response.data.content;
};


export const createUserService = async (user: User) => {
  const response = await usersService.add({ user });
  return response.data; // Assuming the response has a 'data' property containing the user data
};


export const deleteUserService = async (id: number | string) => {
  const response = await usersService.deleteUser({ id });
  return response.data;
};


export const updateUserService = async (user: User) => {
  const response = await usersService.update({ user });
  return response.data;
};


export const countUsers = async () => {
  const response = await usersService.countUsers();
  return response.data;
}
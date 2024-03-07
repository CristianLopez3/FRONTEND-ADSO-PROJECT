import React, { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import InputField from "@/components/InputField";
import { zodResolver } from "@hookform/resolvers/zod";
import { PiSpinnerGapLight } from "react-icons/pi";
import { User } from "@/types/User";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
import { createUser, getAllUsers, updateUser } from "@/store/user/UserReducer";
import { type UserFormTypes, userSchema } from "@/types/User";

type UserFormProps = {
  handleUpdateModal?: () => void;
  handleCreateUser?: () => void;
  mode: "update" | "create";
} & Partial<UserFormTypes>;

const UserForm: React.FC<UserFormProps> = ({
  handleUpdateModal,
  handleCreateUser,
  mode,
  id,
  name,
  email,
  role,
  cellphone,
  identification,
  lastName,
  password,
}) => {
  const title = mode === "update" ? "Update User" : "Create User";
  const buttonText = mode === "update" ? "Update" : "Create";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserFormTypes>({
    defaultValues: {
      id,
      name,
      lastName,
      email,
      password,
      identification,
      cellphone,
      role,
    },
    resolver: zodResolver(userSchema),
  });

  const dispatch = useDispatch<AppDispatch>();

  const renderErrorMessage = (error: { message?: string }) => {
    return error && <p className="p-1 text-red-700">{error.message}</p>;
  };

  // TODO - Add the logic to create an user with his respective Role.
  const onSubmit: SubmitHandler<UserFormTypes> = useCallback(
    async (data) => {
      try {
        data.id = data.id === "" || data.id === null ? null : data.id;
        const user: User = {
          id: data.id,
          name: data.name,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
          identification: data.identification,
          cellphone: data.cellphone.toString(),
          role: data.role,
        };
        
        if (mode === "update") {
          await dispatch(updateUser(user));
        } else {
          await dispatch(createUser(user));
        }

        await dispatch(getAllUsers());

        handleCreateUser?.() || handleUpdateModal?.();
      } catch (error) {
        console.error(error);
      }
    },
    [dispatch, handleCreateUser, handleUpdateModal, mode]
  );

  return (
    <div className="mx-auto my-4 w-full sm:w-[300px] md:w-96 text-center">
      <h3 className="text-lg font-black text-gray-800">{title}</h3>
      <div className="text-left text-sm text-gray-500 mt-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField {...register("id")} type="hidden" />
          <div className="md:flex md:flex-row gap-x-6">
            <div className="block">
              <InputField {...register("name")} />
              {renderErrorMessage(errors.name!)}
            </div>
            <div>
              <InputField {...register("lastName")} />
              {renderErrorMessage(errors.lastName!)}
            </div>
          </div>
          <InputField {...register("email")} type="email" />
          {renderErrorMessage(errors.email!)}
          <InputField {...register("password")} type="password" />
          {renderErrorMessage(errors.password!)}
          <div className="md:flex md:flex-row gap-x-6">
            <div>
              <InputField {...register("cellphone")} type="number" />
              {renderErrorMessage(errors.cellphone!)}
            </div>
            <div>
              <InputField {...register("identification")} />
              {renderErrorMessage(errors.identification!)}
            </div>
          </div>
          <InputField {...register("role")} />
          {renderErrorMessage(errors.role!)}

          <div className="grid grid-cols-2 gap-4 mt-8">
            <button
              className={`btn ${
                mode === "update" ? "btn-warning" : "btn-success"
              } w-full`}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div>
                  <PiSpinnerGapLight className="animate-spin" /> Processing...
                </div>
              ) : (
                buttonText
              )}
            </button>
            <button
              className="btn btn-light w-full"
              onClick={handleUpdateModal || handleCreateUser}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;

import React, { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { PiSpinnerGapLight } from "react-icons/pi";

import { InputField } from "@/components/Input";
import { User } from "@/types/User";
import { AppDispatch } from "@/store/store";

import { createUserAction, getAllUsersAction, updateUserAction } from "@/store/user";
import { type UserFormTypes, userSchema } from "@/types/User";
import { formStyles as styles } from "./contants";

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
  username: email,
  role,
  cellphone,
  identification,
  lastName
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
      username: email,
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
          email: data.username,
          password: data.password,
          identification: data.identification,
          cellphone: data.cellphone.toString(),
          role: data.role,
        };

        if (mode === "update") {
          await dispatch(updateUserAction(user));
        } else {
          await dispatch(createUserAction(user));
        }

        await dispatch(getAllUsersAction());

        handleCreateUser?.() || handleUpdateModal?.();
      } catch (error) {
        console.error(error);
      }
    },
    [dispatch, handleCreateUser, handleUpdateModal, mode]
  );

  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>{title}</h3>
      <div className={styles.form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField {...register("id")} type="hidden" />
          <div className={styles.inputFlex}>
            <div className="block">
              <InputField {...register("name")} />
              {renderErrorMessage(errors.name!)}
            </div>
            <div>
              <InputField {...register("lastName")} />
              {renderErrorMessage(errors.lastName!)}
            </div>
          </div>
          <InputField {...register("username")} type="email" />
          {renderErrorMessage(errors.username!)}
          
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

          <div className={styles.buttons}>
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

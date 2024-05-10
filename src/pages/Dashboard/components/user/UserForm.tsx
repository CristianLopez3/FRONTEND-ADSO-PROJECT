import React, { useCallback } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { PiSpinnerGapLight } from "react-icons/pi";

import { InputField } from "@/components/Input";
import { User, USER_ROLES } from "@/utils/types/User";
import { AppDispatch } from "@/store/store";

import {
  createUserAction,
  getAllUsersAction,
  updateUserAction,
} from "@/store/user";
import { type UserFormTypes, userSchema } from "@/utils/types/User";
import styles from "./styles.module.css";

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
  lastname,
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
      lastname,
      email,
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
  console.log(mode);
  const onSubmit: SubmitHandler<UserFormTypes> = useCallback(
    async (data) => {
      try {
        data.id = data.id === "" || data.id === null ? null : data.id;
        const user: User = {
          id: data.id,
          name: data.name,
          lastname: data.lastname,
          email: data.email,
          password: data.password,
          identification: data.identification,
          cellphone: "313312334",
          role: data.role,
        };

        mode === "update"
          ? await dispatch(updateUserAction(user))
          : await dispatch(createUserAction(user));

        await dispatch(getAllUsersAction());

        handleCreateUser?.() || handleUpdateModal?.();
      } catch (error) {
        console.error(error);
      }
    },
    [dispatch, handleCreateUser, handleUpdateModal, mode]
  );

  return (
    <div className={styles.form_container}>
      <h3 className={styles.form_h3}>{title}</h3>

      <div className={styles.form_form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField {...register("id")} type="hidden" />

          <div className={styles.form_input_flex}>
            <div className={`block ${styles.input_flex}`}>
              <InputField {...register("name")} />
              {renderErrorMessage(errors.name!)}
            </div>
            <div className={styles.input_flex}>
              <InputField {...register("lastname")} type="text" />
              {renderErrorMessage(errors.lastname!)}
            </div>
          </div>

          {mode !== "update" && (
            <>
              <InputField
                {...register("email")}
                placeholder="email"
                type="email"
              />
              {renderErrorMessage(errors.email!)}
              {mode === "create" && (
                <>
                  <InputField {...register("password")} type="password" />
                  {renderErrorMessage(errors.password!)}
                </>
              )}
            </>
          )}

          <div className="md:flex md:flex-row  gap-x-6">
            <div className="w-full">
              <InputField {...register("cellphone")} type="number" />
              {renderErrorMessage(errors.cellphone!)}
            </div>
            <div className="w-full">
              <InputField {...register("identification")} />
              {renderErrorMessage(errors.identification!)}
            </div>
          </div>

          {/* <div className="md:flex md:flex-row gap-x-6"> */}
          <select {...register("role")}>
            {!role  && <option value="x">Select a role please...</option> }
            <option value={USER_ROLES.ADMIN}>Administrador</option>
            <option value={USER_ROLES.SUB_ADMIN}> Sub Administrator </option>
            <option value={USER_ROLES.WAITRESS}>Waitress </option>
            <option value={USER_ROLES.COOK}>Cook</option>
            <option value={USER_ROLES.BARTENDER}>Bartender</option>

          </select>
          {renderErrorMessage(errors.role!)}

          <div className={styles.form_buttons}>
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

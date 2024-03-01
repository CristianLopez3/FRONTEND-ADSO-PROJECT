import InputField from "../../UI/InputField";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PiSpinnerGapLight } from "react-icons/pi";

const schema = z.object({
  id: z.union([z.string(), z.number()]),
  name: z.string().min(1, "name is required"),
  lastName: z.string().min(1, "lastname is required"),
  email: z.string().email("Email is required"),
  password: z.string().min(1, "pasword is required"),
  identification: z.string().min(1, "identification is required"),
  cellphone: z.string().min(1, "cellphone is required"),
  role: z.string().min(1, "role is required"),
});

type UserFormFields = z.infer<typeof schema>;

type UserFormModalProps = {
  handleUpdateModal?: () => void;
  handleCreateUser?: () => void;
  mode: "update" | "create";
} & Partial<UserFormFields>; // Usa Partial<User> para hacer que todas las props de User sean opcionales

const UserFormModal = ({
  handleUpdateModal,
  handleCreateUser,
  mode,
  id = "",
  name,
  email = "",
  role = "",
  cellphone,
  identification = "",
  lastName = "",
  password = "",
}: UserFormModalProps) => {
  const title = mode === "update" ? "Update User" : "Create User";
  const buttonText = mode === "update" ? "Update" : "Create";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<UserFormFields>({
    defaultValues: {
      id: id,
      name: name,
      lastName: lastName,
      email: email,
      password: password,
      identification: identification,
      cellphone: cellphone,
      role: role,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<UserFormFields> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      data.cellphone.valueOf();
      console.log(data);
    } catch (error) {
      console.log(data);
    }
  };

  return (
    <div className="mx-auto my-4 w-48 sm:w-56 md:w-72 text-center">
      <h3 className="text-lg font-black text-gray-800">{title}</h3>
      <div className="text-left text-sm text-gray-500">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Los campos de entrada para el nombre, correo electrónico y teléfono */}
          <InputField
            {...register("name")}
            name="name"
            type="text"
            value={name}
          />
          <InputField
            {...register("lastName")}
            name="lastName"
            type="text"
            value={lastName}
          />
          <InputField
            {...register("email")}
            name="email"
            type="email"
            value={email}
          />
          <InputField
            {...register("password")}
            name="password"
            type="password"
            value={password}
          />
          <InputField
            {...register("cellphone")}
            name="cellphone"
            type="number"
            value={cellphone}
          />
          <InputField
            {...register("identification")}
            name="identification"
            type="text"
            value={identification}
          />
          <InputField
            {...register("role")}
            name="role"
            type="text"
            value={role}
          />

          <div className="grid grid-cols-2 gap-4 mt-8">
            {/* Botón dinámico basado en el modo */}
            <button
              className={`btn ${
                mode === "update" ? "btn-warning" : "btn-success"
              } w-full"`}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div>
                  <PiSpinnerGapLight className="animate-spin" /> is
                  processing...
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
      {errors && (
        <div className="bg-black text-white p-4">
          {Object.values(errors).map((error, index) => (
            <div key={index}>{error.message}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserFormModal;

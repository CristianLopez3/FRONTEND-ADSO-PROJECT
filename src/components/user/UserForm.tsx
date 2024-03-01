import InputField from "../UI/InputField";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PiSpinnerGapLight } from "react-icons/pi";

const schema = z.object({
  id: z.union([z.string(), z.number(), z.undefined()]),
  name: z.string().min(1, "Name is required"),
  lastName: z.string().min(1, "Lastname is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
  identification: z.string().min(1, "Identification is required"),
  cellphone: z.string().min(1, "Cellphone is required"),
  role: z.string().min(1, "Role is required"),
});

type Inputs = z.infer<typeof schema>;

type UserFormProps = {
  handleUpdateModal?: () => void;
  handleCreateUser?: () => void;
  mode: "update" | "create";
} & Partial<Inputs>;

const UserForm = ({
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
}: UserFormProps) => {
  const title = mode === "update" ? "Update User" : "Create User";
  const buttonText = mode === "update" ? "Update" : "Create";

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
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
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="mx-auto my-4 w-48 sm:w-56 md:w-72 text-center">
      <h3 className="text-lg font-black text-gray-800">{title}</h3>
      <div className="text-left text-sm text-gray-500">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField {...register("name")} />
          <InputField {...register("id")} type="hidden" />
          <InputField {...register("lastName")} />
          <InputField {...register("email")} type="email" />
          <InputField {...register("password")} type="password" />
          <InputField {...register("cellphone")} type="number" />
          <InputField {...register("identification")} />
          <InputField {...register("role")} />

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
      {errors && (
        <div className="mt-10 bg-red-200 text-red-800 border  rounded-md p-4">
          {Object.values(errors).map((error, index) => (
            <div key={index}>{error.message}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserForm;

import { Pencil } from "phosphor-react";
import InputField from "../../ui/InputField";
import { User } from "../../../types/User";

type UserFormModalProps = {
  handleUpdateModal?: () => void;
  handleCreateUser?: () => void; 
  mode: "update" | "create"; // Nuevo prop para indicar el modo del formulario
} & Partial<User>; // Usa Partial<User> para hacer que todas las props de User sean opcionales

const UserFormModal = ({
  handleUpdateModal,
  handleCreateUser,
  mode,
  id,
  name,
  email,
  role,
  cellphone,
}: UserFormModalProps) => {
  // Determina el título y el texto del botón basado en el modo
  const title = mode === "update" ? "Update User" : "Create User";
  const buttonText = mode === "update" ? "Update" : "Create";


  // Maneja la acción dependiendo del modo
  const handleAction = mode === "update" ? handleUpdateModal : handleCreateUser;

  return (
    <div className="mx-auto my-4 w-48 sm:w-56 md:w-72 text-center">
      <div className="flex justify-center items-center mb-8">
        <Pencil size={52} color={`${mode == "update" ? "orange" : "green"}`} />
      </div>
      <h3 className="text-lg font-black text-gray-800">{title}</h3>
      <div className="text-left text-sm text-gray-500">
        <form>
          {/* Los campos de entrada para el nombre, correo electrónico y teléfono */}
          <InputField
            id="name"
            name="name"
            placeholder="Enter the name..."
            value={name}
            type="text"
          />
          <InputField
            id="email"
            name="email"
            placeholder="Enter the email..."
            type="text"
            value={email}
          />
          <InputField
            id="cellphone"
            name="cellphone"
            placeholder="Enter the cellphone..."
            value={cellphone}
            type="text"
          />
        </form>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        {/* Botón dinámico basado en el modo */}
        <button className={`btn ${mode === "update" ? "btn-warning" : "btn-success"} w-full"`} onClick={handleAction}>
          {buttonText}
        </button>
        <button className="btn btn-light w-full" onClick={handleUpdateModal}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UserFormModal;

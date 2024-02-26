import { users_service } from "../../../api/users";
import { useRef } from "react"; // Importa useRef
import { User } from "../../../types/User";
import InputField from "../../UI/InputField";
import Form  from "../../UI/Form" ;

type UserFormModalProps = {
  handleUpdateModal?: () => void;
  handleCreateUser?: () => void;
  mode: "update" | "create";
  id?: string | number; // Hace que id sea opcional
} & User; // Usa Partial<User> para hacer que todas las props de User sean opcionales

const UserFormModal = ({
  handleUpdateModal,
  handleCreateUser,
  mode,
  id,
  name = "",
  email = "",
  role = "",
  cellphone = "",
  identification,
  lastName, password
}: UserFormModalProps) => {
  const userDataRef = useRef<User>({ id: id || "", name, email, role, cellphone, identification, lastName, password }); // Crea una referencia con el estado inicial

  const title = mode === "update" ? "Update User" : "Create User";
  const buttonText = mode === "update" ? "Update" : "Create";

  const handleAction = async () => {
    try {
      if (mode === "update") {
        // Lógica para la actualización del usuario
      } else {
        // Lógica para la creación de un nuevo usuario
        await users_service.add({ user: userDataRef.current }); // Accede a los datos a través de la referencia
        if (handleCreateUser) handleCreateUser(); // Llama al callback si está definido
      }
    } catch (error) {
      console.error("Error adding/updating user:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    userDataRef.current = { ...userDataRef.current, [name]: value }; // Actualiza los datos a través de la referencia
  };

  return (
    <div className="mx-auto my-4 w-48 sm:w-56 md:w-72 text-center">
      <h3 className="text-lg font-black text-gray-800">{title}</h3>
      <div className="text-left text-sm text-gray-500">
        <form>
          {/* Los campos de entrada para el nombre, correo electrónico y teléfono */}
          <InputField
            id="name"
            name="name"
            placeholder="Enter the name..."
            value={userDataRef.current.name}
            type="text"
            onChange={handleChange}
          />
          <InputField
            id="email"
            name="email"
            placeholder="Enter the email..."
            type="text"
            value={userDataRef.current.email}
            onChange={handleChange}
          />
          <InputField
            id="cellphone"
            name="cellphone"
            placeholder="Enter the cellphone..."
            value={userDataRef.current.cellphone}
            type="text"
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-8">
        {/* Botón dinámico basado en el modo */}
        <button className={`btn ${mode === "update" ? "btn-warning" : "btn-success"} w-full"`} onClick={handleAction}>
          {buttonText}
        </button>
        <button className="btn btn-light w-full" onClick={handleUpdateModal || handleCreateUser}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UserFormModal;
